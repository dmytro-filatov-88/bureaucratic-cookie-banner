// Bureaucratic Cookie Banner (E.U.C.O.O.K.I.E. Directive 2026/894-B)
(() => {
  'use strict';

  // --- AUDIO SYNTHESIS ENGINE (Procedural Web Audio API) ---
  class BureaucracyAudio {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      return !this.muted;
    }

    // Mechanical toggle switch click
    playToggle(on) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // Click snap (burst of highpass noise)
      const bufferSize = this.ctx.sampleRate * 0.02;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(on ? 2800 : 1600, t);
      filter.Q.setValueAtTime(3, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(t);

      // Subtle metallic click pitch
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(on ? 700 : 500, t);
      osc.frequency.exponentialRampToValueAtTime(120, t + 0.03);
      oscGain.gain.setValueAtTime(0.12, t);
      oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.04);
    }

    // Heavy official rubber stamp THUD + metallic table clatter
    playStamp() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // 1. Deep sub-bass impact thud
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(140, t);
      sub.frequency.exponentialRampToValueAtTime(35, t + 0.3);
      subGain.gain.setValueAtTime(0.7, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      sub.connect(subGain);
      subGain.connect(this.ctx.destination);
      sub.start(t);
      sub.stop(t + 0.36);

      // 2. Heavy rubber slap noise
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(600, t);
      lowpass.frequency.exponentialRampToValueAtTime(80, t + 0.15);

      const nGain = this.ctx.createGain();
      nGain.gain.setValueAtTime(0.6, t);
      nGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      noise.connect(lowpass);
      lowpass.connect(nGain);
      nGain.connect(this.ctx.destination);
      noise.start(t);

      // 3. Official bell / typewriter completion ding
      const bell = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime(1864, t + 0.08); // High Bb
      bellGain.gain.setValueAtTime(0.001, t);
      bellGain.gain.setValueAtTime(0.25, t + 0.08);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
      bell.connect(bellGain);
      bellGain.connect(this.ctx.destination);
      bell.start(t + 0.08);
      bell.stop(t + 0.82);
    }

    // Marble roll gentle hum
    playMarbleChime() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.1);
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.16);
    }

    // Bureaucratic fanfare / victory chime
    playVictory() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      notes.forEach((freq, idx) => {
        const t = this.ctx.currentTime + idx * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.55);
      });
    }
  }

  const audio = new BureaucracyAudio();

  // --- SUB-CLAUSE CLAUSES DATA (14 ABSURD CLAUSES) ---
  const CLAUSES = [
    { id: 1, text: "Sub-clause 1.1: Telepathic Ad Serving during REM Sleep Cycles" },
    { id: 2, text: "Sub-clause 1.2: Predictive grocery cart insertions based on mouse jitter" },
    { id: 3, text: "Sub-clause 1.3: Sharing pupil dilation rates with third-party pigeon brokers" },
    { id: 4, text: "Sub-clause 1.4: Algorithmic calculation of posture sighs per minute" },
    { id: 5, text: "Sub-clause 1.5: Permanent cloud backups of your refrigerator's low-hum frequency" },
    { id: 6, text: "Sub-clause 1.6: Consent to observe your cursor via high-powered binoculars" },
    { id: 7, text: "Sub-clause 1.7: Micro-vibrating trackpad to subliminally spell 'BUY SOUVENIRS'" },
    { id: 8, text: "Sub-clause 1.8: Transmitting ambient room temperature to Antarctic penguins" },
    { id: 9, text: "Sub-clause 1.9: Real-time estimate of likelihood you sneeze in next 4.2s" },
    { id: 10, text: "Sub-clause 1.10: Quantum entanglement of IP address with a Peruvian alpaca" },
    { id: 11, text: "Sub-clause 1.11: Converting idle RAM into microscopic NFT sand dunes" },
    { id: 12, text: "Sub-clause 1.12: Archiving unspoken awkward thoughts during video calls" },
    { id: 13, text: "Sub-clause 1.13: Synchronizing your resting pulse with ECB interest rates" },
    { id: 14, text: "Sub-clause 1.14: Mandatory recording of mild dissatisfaction with modern web design" }
  ];

  // State
  let subclausesState = Array(14).fill(true); // all checked initially
  let marblePos = 10; // percent 0 to 100
  let marbleVel = 0;
  let beamAngle = 0; // degrees
  let balanceTime = 0; // seconds balanced
  let isBalanced = false;
  let isNotarized = false;
  let animFrameId = null;

  // DOM Elements
  const soundBtn = document.getElementById('sound-btn');
  const soundLabel = document.getElementById('sound-label');
  const tabs = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const existentialToggle = document.getElementById('existential-toggle');
  const subclausesContainer = document.getElementById('subclauses-container');
  const subclausesList = document.getElementById('subclauses-list');
  const beamTiltSlider = document.getElementById('beam-tilt-slider');
  const balanceBeam = document.getElementById('balance-beam');
  const marble = document.getElementById('marble');
  const balanceTimer = document.getElementById('balance-timer');
  const vetoedCounter = document.getElementById('vetoed-counter');
  const equilibriumStatus = document.getElementById('equilibrium-status');
  const notaryStampBtn = document.getElementById('notary-stamp-btn');
  const footerRejectBtn = document.getElementById('footer-reject-btn');
  const footerAcceptBtn = document.getElementById('footer-accept-btn');
  const stampOverlay = document.getElementById('stamp-overlay');
  const certificateModal = document.getElementById('certificate-modal');
  const revealCatBtn = document.getElementById('reveal-cat-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const dummyContent = document.getElementById('dummy-content');
  const dossierStatusBadge = document.getElementById('dossier-status-badge');
  const submitAppealBtn = document.getElementById('submit-appeal-btn');
  const notaryTabBtn = document.getElementById('notary-tab-btn');

  // Init Sound Toggle
  soundBtn.addEventListener('click', () => {
    audio.init();
    const active = audio.toggleMute();
    soundLabel.textContent = active ? 'Audio: ON' : 'Audio: MUTED';
    soundBtn.classList.toggle('muted', !active);
  });

  // Tab Switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      audio.init();
      audio.playToggle(true);
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Render Subclauses
  function renderSubclauses() {
    subclausesList.innerHTML = '';
    CLAUSES.forEach((clause, index) => {
      const item = document.createElement('div');
      item.className = 'subclause-item';

      const label = document.createElement('span');
      label.textContent = clause.text;

      const toggleWrapper = document.createElement('div');
      toggleWrapper.className = 'toggle-wrapper';

      const chk = document.createElement('input');
      chk.type = 'checkbox';
      chk.id = `clause-chk-${index}`;
      chk.checked = subclausesState[index];

      const sw = document.createElement('label');
      sw.htmlFor = `clause-chk-${index}`;
      sw.className = 'switch mini-toggle';

      chk.addEventListener('change', (e) => {
        audio.init();
        audio.playToggle(chk.checked);
        subclausesState[index] = chk.checked;

        // Bureaucratic spite: randomly re-enabling a sister toggle 25% of the time
        if (!chk.checked && Math.random() < 0.25) {
          const otherIdx = (index + 3) % 14;
          if (!subclausesState[otherIdx]) {
            subclausesState[otherIdx] = true;
            setTimeout(() => {
              renderSubclauses();
              audio.playToggle(true);
            }, 300);
          }
        }
        updateVetoStatus();
      });

      toggleWrapper.appendChild(chk);
      toggleWrapper.appendChild(sw);
      item.appendChild(label);
      item.appendChild(toggleWrapper);
      subclausesList.appendChild(item);
    });
  }

  // Handle Existential Toggle
  existentialToggle.addEventListener('change', () => {
    audio.init();
    audio.playToggle(existentialToggle.checked);
    if (!existentialToggle.checked) {
      // Reveal subclauses!
      subclausesContainer.classList.add('revealed');
      renderSubclauses();
      startMarblePhysics();
    } else {
      // Re-accepted
      subclausesContainer.classList.remove('revealed');
      subclausesState.fill(true);
      updateVetoStatus();
    }
  });

  // Update Status in Notary Tab & Buttons
  function updateVetoStatus() {
    const vetoedCount = subclausesState.filter(s => !s).length;
    vetoedCounter.textContent = `${vetoedCount} / 14`;

    const allVetoed = vetoedCount === 14;
    const canStamp = allVetoed && isBalanced;

    notaryStampBtn.disabled = !canStamp;
    const stampHint = document.getElementById('stamp-hint');
    if (stampHint) {
      if (!allVetoed) {
        stampHint.textContent = `Veto all 14 sub-clauses first (${vetoedCount}/14 completed).`;
      } else if (!isBalanced) {
        stampHint.textContent = `All sub-clauses vetoed! Now balance the marble for 3.0s!`;
      } else {
        stampHint.textContent = `Ready for Solemn Stamping! Click the hammer above!`;
      }
    }
  }

  // Marble Balance Physics Simulation
  function startMarblePhysics() {
    if (animFrameId) return;
    let lastTime = performance.now();

    function loop(currentTime) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Gravity pulls marble down the tilted beam
      // Beam tilt is in degrees (-30 to +30)
      const radians = (beamAngle * Math.PI) / 180;
      const acceleration = Math.sin(radians) * 120; // percent / s^2

      marbleVel += acceleration * dt;
      marbleVel *= 0.98; // friction
      marblePos += marbleVel * dt;

      // Bounce off ends
      if (marblePos <= 5) {
        marblePos = 5;
        marbleVel = -marbleVel * 0.4;
      } else if (marblePos >= 95) {
        marblePos = 95;
        marbleVel = -marbleVel * 0.4;
      }

      marble.style.left = `${marblePos}%`;

      // Check center equilibrium (between 44% and 56%)
      if (marblePos >= 44 && marblePos <= 56) {
        balanceTime += dt;
        if (balanceTime >= 3.0 && !isBalanced) {
          isBalanced = true;
          balanceTimer.textContent = 'BALANCE: 3.0s (APPROVED!)';
          balanceTimer.classList.add('success');
          equilibriumStatus.textContent = 'VERIFIED (STABLE)';
          equilibriumStatus.className = 'status-pass';
          audio.playVictory();
          updateVetoStatus();
        } else if (!isBalanced) {
          balanceTimer.textContent = `Balance: ${balanceTime.toFixed(1)}s / 3.0s`;
        }
      } else {
        if (!isBalanced) {
          balanceTime = Math.max(0, balanceTime - dt * 1.5); // decay timer
          balanceTimer.textContent = `Balance: ${balanceTime.toFixed(1)}s / 3.0s`;
        }
      }

      animFrameId = requestAnimationFrame(loop);
    }

    animFrameId = requestAnimationFrame(loop);
  }

  // Beam slider control
  beamTiltSlider.addEventListener('input', (e) => {
    audio.init();
    beamAngle = parseFloat(e.target.value);
    balanceBeam.style.transform = `rotate(${beamAngle}deg)`;
    if (Math.abs(beamAngle) < 3) {
      audio.playMarbleChime();
    }
  });

  // Notary Stamp Action
  notaryStampBtn.addEventListener('click', () => {
    audio.init();
    audio.playStamp();
    isNotarized = true;

    // Show stamp overlay slamming down
    stampOverlay.classList.remove('hidden');

    dossierStatusBadge.textContent = 'STATUS: NOTARIZED REJECTION';
    dossierStatusBadge.classList.add('resolved');

    footerRejectBtn.disabled = false;
    footerRejectBtn.textContent = '⚖️ EXECUTE NOTARIZED REJECTION';

    setTimeout(() => {
      // Auto-trigger rejection execution
      footerRejectBtn.click();
    }, 1200);
  });

  // Footer Reject Button
  footerRejectBtn.addEventListener('click', () => {
    audio.init();
    audio.playVictory();
    // Show certificate modal
    certificateModal.classList.remove('hidden');
  });

  // Accept All Button (The Trap)
  footerAcceptBtn.addEventListener('click', () => {
    audio.init();
    audio.playToggle(true);
    alert('🍪 CONGRATULATIONS!\n\nYou have accepted 4,812 third-party trackers, agreed to sponsor an Antarctic penguin, and donated your cursor to the Ministry of Confectionery.\n\nEnjoy the kitten!');
    modalBackdrop.classList.add('hidden');
    dummyContent.classList.add('revealed');
    // Replace dummy blurred kitten placeholder with actual cute kitten SVG/photo
    revealKitten();
  });

  // Reveal Kitten from Certificate
  revealCatBtn.addEventListener('click', () => {
    audio.init();
    audio.playVictory();
    certificateModal.classList.add('hidden');
    modalBackdrop.classList.add('hidden');
    dummyContent.classList.add('revealed');
    revealKitten();
  });

  function revealKitten() {
    const photoBox = document.querySelector('.dummy-photo-placeholder');
    if (photoBox) {
      photoBox.innerHTML = `
        <div style="font-size: 5rem; animation: bounce 1s infinite alternate;">🐱 👑 🏆</div>
        <h2 style="color: #2ed573; margin-top: 10px;">Sir Bartholomew Fluffington III</h2>
        <p style="color: #333; max-width: 480px; margin: 8px auto;">You have braved the darkest corridors of bureaucratic red tape and emerged victorious. No cookies were harmed (or stored) in this triumph.</p>
        <button class="bureau-btn secondary-btn" style="margin-top: 15px;" onclick="location.reload()">Re-Enter Bureaucratic Purgatory</button>
      `;
      photoBox.style.border = '3px solid #2ed573';
      photoBox.style.background = '#f0fff4';
    }
  }

  // Fine Print Link
  document.getElementById('view-fine-print-btn').addEventListener('click', () => {
    alert('E.U.C.O.O.K.I.E. APPENDIX § 489.12:\n\n"Any citizen found enjoying their browsing experience without encountering at least two nested modal dialogues shall be fined three Euros and a fresh croissant."');
  });

  // Appeals Submission
  submitAppealBtn.addEventListener('click', () => {
    audio.init();
    audio.playStamp();
    alert('✅ APPEAL RECORDED!\n\nYour appeal #41,903 has been filed into a high-security subterranean filing cabinet. Expected response time: 8 to 14 business decades.');
  });

})();
