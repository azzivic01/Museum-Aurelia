/**
 * Palace Acoustic Resonance Synth (Web Audio API)
 * Simulates the solemn acoustic silence of vast marble and stone galleries.
 */

class PalaceAmbienceEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning: boolean = false;
  private lowOsc: OscillatorNode | null = null;
  private airNoiseNode: AudioBufferSourceNode | null = null;

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isRunning;
  }

  public start(): void {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.08, now + 3); // Very subtle, gentle level
      this.masterGain.connect(this.ctx.destination);

      // 1. Deep Room Resonance (54Hz Sub-harmonic warm palace hall drone)
      this.lowOsc = this.ctx.createOscillator();
      this.lowOsc.type = 'sine';
      this.lowOsc.frequency.setValueAtTime(54, now);

      const lowFilter = this.ctx.createBiquadFilter();
      lowFilter.type = 'lowpass';
      lowFilter.frequency.setValueAtTime(90, now);

      const lowGain = this.ctx.createGain();
      lowGain.gain.setValueAtTime(0.6, now);

      this.lowOsc.connect(lowFilter);
      lowFilter.connect(lowGain);
      lowGain.connect(this.masterGain);
      this.lowOsc.start(now);

      // 2. High Cathedral Air (soft filtered noise simulating air circulation in a 12m vault)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      this.airNoiseNode = this.ctx.createBufferSource();
      this.airNoiseNode.buffer = noiseBuffer;
      this.airNoiseNode.loop = true;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(420, now);
      bandpass.Q.setValueAtTime(1.8, now);

      const airGain = this.ctx.createGain();
      airGain.gain.setValueAtTime(0.04, now);

      this.airNoiseNode.connect(bandpass);
      bandpass.connect(airGain);
      airGain.connect(this.masterGain);
      this.airNoiseNode.start(now);

      this.isRunning = true;
    } catch (e) {
      console.warn('Web Audio ambience unavailable or blocked:', e);
      this.isRunning = false;
    }
  }

  public stop(): void {
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
      setTimeout(() => {
        try {
          this.lowOsc?.stop();
          this.airNoiseNode?.stop();
          this.lowOsc?.disconnect();
          this.airNoiseNode?.disconnect();
        } catch {
          // clean ignore
        }
        this.isRunning = false;
      }, 1600);
    } else {
      this.isRunning = false;
    }
  }
}

export const palaceAmbience = new PalaceAmbienceEngine();
