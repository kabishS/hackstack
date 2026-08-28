const TOOLS = [
  {step:1,  name:"ChatGPT",       cat:"Plan",    icon:"🧠", logo:"openai",         desc:"Idea generation, problem understanding, planning.", url:"https://chat.openai.com"},
  {step:2,  name:"Perplexity",    cat:"Research",icon:"🔎", logo:"perplexity",     desc:"Research, competitors, facts, sources.", url:"https://www.perplexity.ai"},
  {step:3,  name:"Gemini",        cat:"Research", icon:"🤖", logo:"googlegemini",  desc:"Research, brainstorming, technical analysis.", url:"https://gemini.google.com"},
  {step:4,  name:"Claude",        cat:"Plan",    icon:"🧠", logo:"claude",         desc:"Architecture, coding plan, complex logic.", url:"https://claude.ai"},
  {step:5,  name:"Stitch",        cat:"Design",  icon:"🎨", logo:null,             desc:"Generate UI/UX design.", url:"https://stitch.withgoogle.com"},
  {step:6,  name:"Figma",         cat:"Design",  icon:"🎨", logo:"figma",          desc:"Refine UI, wireframes, prototype.", url:"https://www.figma.com"},
  {step:7,  name:"Canva",         cat:"Design",  icon:"🖼️", logo:"canva",         desc:"Logo, graphics, posters.", url:"https://www.canva.com"},
  {step:8,  name:"GitHub Copilot",cat:"Code",    icon:"💻", logo:"githubcopilot",  desc:"Code generation, autocomplete, debugging.", url:"https://github.com/features/copilot"},
  {step:9,  name:"DeepSeek",      cat:"Code",    icon:"🧠", logo:"deepseek",       desc:"Coding, algorithms, difficult logic.", url:"https://www.deepseek.com"},
  {step:10, name:"Antigravity",   cat:"Code",    icon:"🧩", logo:null,             desc:"AI-assisted development / coding.", url:"https://antigravity.google"},
  {step:11, name:"API Hub",       cat:"Backend", icon:"🔌", logo:"rapidapi",       desc:"Find APIs for your project.", url:"https://kabishs.github.io/APIs-Hub/"},
  {step:12, name:"Supabase",      cat:"Backend", icon:"🔥", logo:"supabase",       desc:"Database, authentication, storage.", url:"https://supabase.com"},
  {step:13, name:"Firebase",      cat:"Backend", icon:"🔥", logo:"firebase",       desc:"Alternative backend, database, auth.", url:"https://firebase.google.com"},
  {step:14, name:"GitHub",        cat:"Ship",    icon:"🐙", logo:"github",         desc:"Store code, version control, collaboration.", url:"https://github.com"},
  {step:15, name:"Vercel / Netlify",cat:"Ship",  icon:"🚀", logo:"vercel",         desc:"Deploy your website.", url:"https://vercel.com"},
  {step:16, name:"Gamma",         cat:"Present", icon:"📊", logo:null,             desc:"Final PPT, pitch deck, presentation.", url:"https://gamma.app"},
];

const stagesEl = document.getElementById('stages');
const emptyEl = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');

TOOLS.sort((a,b)=>a.step-b.step);

function iconBadgeHTML(t){
  if(t.logo){
    return `
      <div class="icon-badge">
        <img src="https://cdn.simpleicons.org/${t.logo}" alt="${t.name} logo"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <span class="emoji-fallback">${t.icon}</span>
      </div>`;
  }
  return `<div class="icon-badge"><span class="emoji-fallback" style="display:block;">${t.icon}</span></div>`;
}

function cardHTML(t){
  return `
    <div class="col-sm-6 col-lg-4 col-xl-3 tool-col" data-name="${t.name.toLowerCase()}">
      <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="tool-card">
        <div class="step-tag">STEP ${String(t.step).padStart(2,'0')}</div>
        ${iconBadgeHTML(t)}
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        <div class="go">open tool
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </div>
      </a>
    </div>`;
}

function render(){
  const q = searchInput.value.trim().toLowerCase();
  const items = TOOLS.filter(t=>{
    return !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
  });

  stagesEl.innerHTML = `<div class="row g-3">${items.map(cardHTML).join('')}</div>`;
  emptyEl.style.display = items.length===0 ? 'block' : 'none';
}

searchInput.addEventListener('input', render);

document.addEventListener('keydown', (e)=>{
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k'){
    e.preventDefault();
    searchInput.focus();
  }
});

// theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
function applyTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  themeIcon.textContent = mode==='dark' ? '☾' : '☀';
}
themeToggle.addEventListener('click', ()=>{
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current==='dark' ? 'light' : 'dark');
});
applyTheme('dark');

render();
