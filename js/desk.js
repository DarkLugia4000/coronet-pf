// --- 1. ICON DEFINITIONS (SVG PATHS) ---
const ICONS = {
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
    exec: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>'
};

// --- 2. DATA ---
const fileSystem = {
    "root": {
        name: "root",
        type: "folder",
        children: {
            "Projects": {
                name: "Projects",
                type: "folder",
                children: {
                    // [EDITABLE] Link to external project/site
                    "coronet.exe": { name: "coronet.exe", type: "link", url: "https://coronet.dev/lab" }, 
                    "others.exe": { name: "others.exe", type: "app", appId: "others" }
                }
            },
            "profile.html": { name: "profile.html", type: "app", appId: "profile" },
            // [EDITABLE] Link to blog
            "blog.html": { name: "blog.html", type: "link", url: "https://coronet.dev/blog" }, 
            "skills.sh": { name: "skills.sh", type: "app", appId: "skills" }
        }
    }
};

const appContent = {
    "profile": `
        <div class="browser-tabs">
            <div class="tab active" onclick="ui.switchTab(this, 't1')">Overview</div>
            <div class="tab" onclick="ui.switchTab(this, 't2')">Experience</div>
            <div class="tab" onclick="ui.switchTab(this, 't3')">Education</div>
            <div class="tab" onclick="ui.switchTab(this, 't4')">Interests</div>
        </div>
        
        <div class="tab-content-container">
            <div id="t1" class="tab-pane active">
                <div class="profile-header">
                    <h1>Josue-Marie Nonguierma</h1>
                    <span class="profile-meta">Computer Science Student // Hamburg, DE</span>
                </div>
                <div style="height: 1px; background: var(--line); margin: 20px 0;"></div>
                
                <p style="color: var(--text); line-height: 1.6;">I am a systems-oriented problem-solver in building reliable, automated solutions that create tangible value for others. I focus on designing infrastructure and workflows that are stable, scalable, and efficient.</p>
                <p style="color: var(--muted); font-size: 13px;">My working style is precise, analytical, and detail-driven. I pay close attention to system behavior at the margins and take personal enjoyment of pushing their limits, just as much as my own..</p>
                
                <div class="pill-container">
                    <span class="tech-pill">C</span>
                    <span class="tech-pill">C++</span>
                    <span class="tech-pill">Docker</span>
                    <span class="tech-pill">Python</span>
                    <span class="tech-pill">Linux</span>
                </div>

                <div style="margin-top: 30px;">
                    <a href="https://github.com/DarkLugia4000" class="social-btn">GitHub</a>
                    <a href="#" class="social-btn">CV</a>
                    <a href="mailto:josuenonguierma3@gmail.com" class="social-btn">Email</a>
                </div>
            </div>

            <div id="t2" class="tab-pane">
                <h2 style="font-size: 12px; text-transform: uppercase; color: var(--muted); letter-spacing: 1px; margin-bottom: 20px;">Professional History</h2>
                
                <div class="exp-item">
                    <div class="exp-title">Networking & Learning</div>
                    <div class="exp-date">Homelab Admin • 2025-</div>
                    <ul class="exp-desc" style="padding-left: 15px; margin-top: 5px;">
                        <li>Managing containerized client-facing applications</li>
                        <li>Overseeing media services for my family</li>
                        <li>Reinforced home network safety via DNS filtering</li>
                    </ul>
                </div>

                <div class="exp-item">
                    <div class="exp-title">Service Agent</div>
                    <div class="exp-date">Telefónica Germany (O2) • Oct 2022 – Apr 2025</div>
                    <ul class="exp-desc" style="padding-left: 15px; margin-top: 5px;">
                        <li>Handled GDPR-compliant customer data workflows</li>
                        <li>Onboarded and trained new agents on internal systems</li>
                        <li>Participated in deployment of updated telephony systems</li>
                    </ul>
                </div>
            </div>

            <div id="t3" class="tab-pane">
                <h2 style="font-size: 12px; text-transform: uppercase; color: var(--muted); letter-spacing: 1px; margin-bottom: 20px;">Academic Background</h2>
                <div class="exp-item">
                    <div class="exp-title">Computer Science</div>
                    <div class="exp-date">Hamburg, DE</div>
                    <p class="exp-desc">Focus on Systems Engineering, Containerized Networking, and Distributed Systems.</p>
                </div>
            </div>

            <div id="t4" class="tab-pane">
                <div class="pixel-list">
                    <div class="pixel-mode">
                        hobbies: writing, worldbuilding, traveling, competitive pokemon, anime, gaming
                    </div>
                    <div class="pixel-mode">
                        mons i <3: lugia <img src="/assets/lugia-ani.png" class="inline-sprite" title="Lugia">, 
                        typhlosion <img src="/assets/typh-ani.png" class="inline-sprite" title="Typhlosion">, 
                        umbreon <img src="/assets/umbr-ani.png" class="inline-sprite" title="Umbreon">,
                        reshiram <img src="/assets/resh-ani.png" class="inline-sprite" title="Reshiram">
                    </div>
                    <div class="pixel-mode">
                        games: soulsilver (clearly) <img src="/assets/lugia-ani.png" class="inline-sprite" title="Lugia">, w2 <img src="/assets/resh-ani.png" class="inline-sprite" title="Reshiram"> , z-a <img src="/assets/zyg-sprite.png" class="inline-sprite" title="Zygarde">
                    </div>
                    <div class="pixel-mode">
                        other games: satisfactory, elite dangerous, stellaris, rts (too many), monster hunter
                    </div>
                    <div class="pixel-mode">
                        anime favs: takopi's original sin, toaru series (mainly railgun tho), madoka magica, made in abyss, konosuba
                    </div>
                </div>
            </div>
        </div>
    `,
    "skills": `
        <div class="terminal">
            <div class="term-line">
                <span class="term-prompt">josue@coronet $</span>
                <span class="term-inline">./skills.sh</span>
            </div>

            <div class="term-line">
                <span class="term-out">loading competency map...</span>
            </div>

            <div class="skill-category">
                <span class="category-title">systems</span>

                <div class="skill-row">
                    <span class="skill-label">Linux</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 84%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">Docker</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 82%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">Networking</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 70%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">Monitoring</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 66%;"></span>
                    </span>
                </div>
            </div>

            <div class="skill-category">
                <span class="category-title">programming</span>

                <div class="skill-row">
                    <span class="skill-label">C</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 68%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">C++</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 62%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">Python</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 74%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">JS</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 60%;"></span>
                    </span>
                </div>
            </div>

            <div class="skill-category" style="margin-bottom: 0;">
                <span class="category-title">workflow</span>

                <div class="skill-row">
                    <span class="skill-label">Git</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 72%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">Docs</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 69%;"></span>
                    </span>
                </div>

                <div class="skill-row">
                    <span class="skill-label">Automation</span>
                    <span class="bar-track">
                        <span class="bar-fill" style="--level: 78%;"></span>
                    </span>
                </div>
            </div>

            <div class="term-line" style="margin-top: 14px;">
            <span class="term-prompt">status:</span>
            <span class="term-inline">ready</span>
            </div>

            <div class="term-line">
            <span class="term-prompt">$</span>
            <span class="blink">█</span>
        </div>
    `,
};

// --- 3. WINDOW MANAGER LOGIC ---
let zIndexCounter = 100;
let explorerHistory = {}; 

const ui = {
    createWindow: (id, title, content, type = 'standard') => {
        zIndexCounter++;
        const winId = `win-${Date.now()}`;
        
        const winEl = document.createElement('div');
        winEl.className = 'window';
        winEl.id = winId;
        winEl.style.zIndex = zIndexCounter;

        winEl.innerHTML = `
            <div class="title-bar" onmousedown="wm.startDrag(event, '${winId}')">
                <div class="traffic-lights">
                    <button class="win-btn btn-close" onclick="wm.close('${winId}')"></button>
                    <button class="win-btn btn-min" onclick="wm.minimize('${winId}')"></button>
                    <button class="win-btn btn-max" onclick="wm.maximize('${winId}')"></button>
                </div>
                <div class="window-title">${title}</div>
            </div>
            <div class="window-body">
                ${content}
            </div>
        `;

        document.getElementById('window-area').appendChild(winEl);
        wm.addTaskbarItem(winId, title);
        winEl.addEventListener('mousedown', () => wm.focus(winId));

        const offset = Math.random() * 40;
        winEl.style.top = (100 + offset) + 'px';
        winEl.style.left = (100 + offset) + 'px';

        return { id: winId, el: winEl };
    },

    switchTab: (tabEl, targetId) => {
        const parent = tabEl.parentElement;
        const container = parent.nextElementSibling;
        
        parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        container.querySelectorAll('.tab-pane').forEach(c => c.classList.remove('active'));
        
        tabEl.classList.add('active');
        container.querySelector('#' + targetId).classList.add('active');
    }
};

const wm = {
    startDrag: (e, id) => {
        const win = document.getElementById(id);
        if (win.classList.contains('maximized')) return;

        wm.focus(id);
        
        let startX = e.clientX;
        let startY = e.clientY;
        let startLeft = win.offsetLeft;
        let startTop = win.offsetTop;

        win.style.transition = 'none';

        function doDrag(e) {
            win.style.left = (startLeft + e.clientX - startX) + 'px';
            win.style.top = (startTop + e.clientY - startY) + 'px';
        }

        function stopDrag() {
            document.removeEventListener('mousemove', doDrag);
            document.removeEventListener('mouseup', stopDrag);
            win.style.transition = 'opacity 0.2s, transform 0.2s';
        }

        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
    },

    focus: (id) => {
        const win = document.getElementById(id);
        if(win) {
            zIndexCounter++;
            win.style.zIndex = zIndexCounter;
            
            document.querySelectorAll('.task-item').forEach(t => t.classList.remove('active'));
            const taskItem = document.getElementById(`task-${id}`);
            if(taskItem) taskItem.classList.add('active');
            
            if(win.classList.contains('minimized')) {
                win.classList.remove('minimized');
            }
        }
    },

    close: (id) => {
        const win = document.getElementById(id);
        if(win) {
            win.style.opacity = '0';
            win.style.transform = 'scale(0.9)';
            setTimeout(() => win.remove(), 200);
        }
        const task = document.getElementById(`task-${id}`);
        if(task) task.remove();
    },

    minimize: (id) => {
        const win = document.getElementById(id);
        win.classList.add('minimized');
        const task = document.getElementById(`task-${id}`);
        if(task) task.classList.remove('active');
    },

    maximize: (id) => {
        const win = document.getElementById(id);
        win.classList.toggle('maximized');
        wm.focus(id);
    },

    addTaskbarItem: (id, title) => {
        const bar = document.getElementById('taskbar');
        const item = document.createElement('div');
        item.className = 'task-item active';
        item.id = `task-${id}`;
        item.innerHTML = `<span>${title}</span>`;
        item.onclick = () => wm.focus(id);
        bar.appendChild(item);
        
        document.querySelectorAll('.task-item').forEach(t => t.classList.remove('active'));
    }
};

// --- 4. APP & EXPLORER LOGIC ---
const app = {
    openExplorer: () => {
        const winObj = ui.createWindow(null, 'Explorer', '', 'explorer');
        explorerHistory[winObj.id] = { stack: [fileSystem.root], pointer: 0 };
        app.renderExplorer(winObj.el, fileSystem.root);
    },
    
    // Helper to get SVG icon based on type/name
    getIconString: (item) => {
        if (item.type === 'folder') return { svg: ICONS.folder, class: 'folder' };
        if (item.name.endsWith('.exe') || item.name.endsWith('.sh')) return { svg: ICONS.exec, class: 'exec' };
        return { svg: ICONS.file, class: 'code' }; 
    },

    renderExplorer: (winEl, dirData) => {
        const body = winEl.querySelector('.window-body');
        
        body.innerHTML = `
            <div class="explorer-layout">
                <div class="explorer-nav">
                    <button class="nav-btn" onclick="app.navBack('${winEl.id}')">←</button>
                    <button class="nav-btn" onclick="app.navFwd('${winEl.id}')">→</button>
                    <div class="path-bar">${app.getPath(dirData)}</div>
                </div>
                <div class="explorer-content">
                    <div class="sidebar">
                        <div class="sidebar-item" onclick="app.navTo('${winEl.id}', fileSystem.root)">Home</div>
                        <div class="sidebar-item" onclick="app.navTo('${winEl.id}', fileSystem.root.children['Projects'])">Projects</div>
                        <div class="sidebar-item" onclick="app.openContact()">Contact</div>
                    </div>
                    <div class="file-grid">
                        ${Object.values(dirData.children || {}).map(item => {
                            const iconData = app.getIconString(item);
                            return `
                            <div class="file-item" onclick="app.handleFileClick('${winEl.id}', '${item.name}')">
                                <div class="file-icon ${iconData.class}">
                                    <svg viewBox="0 0 24 24">${iconData.svg}</svg>
                                </div>
                                <div class="file-name">${item.name}</div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    getPath: (obj) => { return obj.name === 'root' ? 'root/' : 'root/.../' + obj.name; },

    handleFileClick: (winId, fileName) => {
        const hist = explorerHistory[winId];
        const currentDir = hist.stack[hist.pointer];
        const target = currentDir.children[fileName];

        if (target.type === 'folder') {
            app.navTo(winId, target);
        } else if (target.type === 'app') {
            ui.createWindow(null, target.name, appContent[target.appId]);
        } else if (target.type === 'link') {
            window.location.assign(target.url);
        }
    },

    navTo: (winId, dirObj) => {
        const hist = explorerHistory[winId];
        hist.stack = hist.stack.slice(0, hist.pointer + 1);
        hist.stack.push(dirObj);
        hist.pointer++;
        app.renderExplorer(document.getElementById(winId), dirObj);
    },

    navBack: (winId) => {
        const hist = explorerHistory[winId];
        if(hist.pointer > 0) {
            hist.pointer--;
            app.renderExplorer(document.getElementById(winId), hist.stack[hist.pointer]);
        }
    },

    navFwd: (winId) => {
        const hist = explorerHistory[winId];
        if(hist.pointer < hist.stack.length - 1) {
            hist.pointer++;
            app.renderExplorer(document.getElementById(winId), hist.stack[hist.pointer]);
        }
    },

    openContact: () => {
        ui.createWindow(null, 'Contact', `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center;">
                <div style="width:64px; height:64px; color:var(--accent); margin-bottom:15px;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <h3 style="margin:0; color:#fff;">Get in touch</h3>
                <p style="color:var(--muted); font-size:13px; margin: 5px 0 15px 0;">Feel free to reach out for collaboration.</p>
                <a href="mailto:josuenonguierma3@gmail.com" style="color:var(--accent); font-family:var(--mono); text-decoration:none; border:1px solid var(--line); padding:8px 16px; border-radius:6px; background:rgba(255,255,255,0.05);">josuenonguierma3@gmail.com</a>
            </div>
        `);
    }
};