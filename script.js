function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-container').style.backgroundImage = `url('${e.target.result}')`;
        }
        reader.readAsDataURL(file);
    }
}

function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-container').style.backgroundImage = `url('${e.target.result}')`;
        }
        reader.readAsDataURL(file);
    }
}

// Star Rating Logic
function setRating(star, count) {
    const starsDiv = star.parentElement;
    const allStars = starsDiv.querySelectorAll('i');
    allStars.forEach((s, index) => {
        if (index < count) {
            s.className = 'fas fa-star';
        } else {
            s.className = 'far fa-star';
        }
    });
}

// Maker Logic: Adding Items
function addSkill() {
    const list = document.getElementById('skills-list');
    const li = document.createElement('li');
    li.className = 'maker-item';
    li.innerHTML = `
        <span contenteditable="true">Yeni Beceri</span>
        <button class="btn-delete" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
    `;
    list.appendChild(li);
    li.querySelector('span').focus();
}

function addLanguage() {
    const list = document.getElementById('languages-list');
    const li = document.createElement('li');
    li.className = 'maker-item';
    li.innerHTML = `
        <div class="lang-row">
            <span class="skill-name" contenteditable="true">Yeni Dil</span>
            <div class="stars" contenteditable="false">
                <i class="fas fa-star" onclick="setRating(this, 1)"></i><i class="far fa-star" onclick="setRating(this, 2)"></i><i class="far fa-star" onclick="setRating(this, 3)"></i><i class="far fa-star" onclick="setRating(this, 4)"></i><i class="far fa-star" onclick="setRating(this, 5)"></i>
            </div>
        </div>
        <button class="btn-delete" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
    `;
    list.appendChild(li);
}

function addExperience() {
    const container = document.getElementById('experience-list');
    const div = document.createElement('div');
    div.className = 'timeline-item maker-item';
    div.innerHTML = `
        <button class="btn-delete dark" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
        <div class="job-header">
            <h4 contenteditable="true">Şirket Adı</h4>
            <div contenteditable="true" style="font-weight: 400; font-size: 0.95rem; color: #444;">Pozisyon</div>
            <span class="date" contenteditable="true">Tarih Aralığı</span>
        </div>
        <div class="job-description" contenteditable="true">
            <p>- İş tanımı le ilgili detayları buraya yazabilirsiniz.</p>
        </div>
    `;
    container.appendChild(div);
}

function addEducation() {
    const container = document.getElementById('education-list');
    const div = document.createElement('div');
    div.className = 'education-item maker-item';
    div.innerHTML = `
        <button class="btn-delete dark" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
        <h4 contenteditable="true">Okul Adı</h4>
        <div contenteditable="true" style="font-weight: 400; font-size: 0.95rem; color: #444;">Bölüm / Derece</div>
        <span class="date" contenteditable="true">Mezuniyet Yılı</span>
    `;
    container.appendChild(div);
}

function addReference() {
    const container = document.getElementById('reference-list');
    const div = document.createElement('div');
    div.className = 'reference-item maker-item';
    div.innerHTML = `
        <button class="btn-delete dark" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
        <h4 contenteditable="true">Referans Adı, Ünvanı</h4>
        <p contenteditable="true">E-posta | Telefon</p>
    `;
    container.appendChild(div);
}

function addProject() {
    const container = document.getElementById('project-list');
    const div = document.createElement('div');
    div.className = 'timeline-item maker-item';
    div.innerHTML = `
        <button class="btn-delete dark" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
        <div class="job-header">
            <h4 contenteditable="true" style="margin-bottom: 2px;">Proje Adı</h4>
            <div contenteditable="true" style="font-weight: 400; font-size: 0.95rem; color: #444;">Rolünüz / Teknolojiler</div>
        </div>
        <div class="job-description" contenteditable="true">
            <p>- Proje ile ilgili teknik detayları ve kazanımları buraya yazabilirsiniz.</p>
        </div>
    `;
    container.appendChild(div);
}

function addCertificate() {
    const container = document.getElementById('certificate-list');
    const div = document.createElement('div');
    div.className = 'course-item maker-item';
    div.innerHTML = `
        <button class="btn-delete dark" onclick="this.parentElement.remove()" title="Sil"><i class="fas fa-times"></i></button>
        <h4 contenteditable="true" style="margin-bottom: 2px;">Sertifika / Kurs Adı</h4>
        <div contenteditable="true" style="font-weight: 400; font-size: 0.95rem; color: #444;">Kurum / Açıklama</div>
        <span class="date" contenteditable="true">Tarih</span>
    `;
    container.appendChild(div);
}

function downloadPDF() {
    const element = document.getElementById('cv-content');
    const name = document.querySelector('.header h1').innerText.trim() || 'CV';
    const filename = `${name.replace(/\s+/g, '_')}_CV.pdf`;

    // Always scroll to top before generating PDF to prevent vertical offset issues
    window.scrollTo(0, 0);

    const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.7 },
        pagebreak: { mode: 'avoid-all' },
        html2canvas: {
            scale: 1.5,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            scrollX: 0,
            scrollY: 0,
            onclone: (clonedDoc) => {
                // 1. Inject a style tag to disable ALL animations and hide controls
                const styleTag = clonedDoc.createElement('style');
                styleTag.innerHTML = `
                    *, *::before, *::after {
                        animation: none !important;
                        transition: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                    }
                    .btn-add, .btn-delete, .controls, .overlay {
                        display: none !important;
                    }
                    /* Show kariyer.net link in PDF */
                    .pdf-show {
                        display: flex !important;
                    }
                `;
                clonedDoc.head.appendChild(styleTag);

                // 2. Reset body spacing
                clonedDoc.body.style.margin = '0';
                clonedDoc.body.style.padding = '0';
                clonedDoc.body.style.background = '#f0f0f0';

                // 3. Fix cv-container
                const cv = clonedDoc.getElementById('cv-content');
                if (cv) {
                    cv.style.margin = '0 auto';
                    cv.style.boxShadow = 'none';
                }

                // 4. Force sidebar color
                const sidebar = clonedDoc.querySelector('.sidebar');
                if (sidebar) {
                    sidebar.style.setProperty('background-color', '#0b1a2a', 'important');
                    sidebar.style.setProperty('color', '#ffffff', 'important');
                    sidebar.style.height = '100%';
                }
            }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true }
    };

    html2pdf().set(opt).from(element).save();
}


// Optional: Add a listener to prevent new lines in single-line fields if needed
// For now, we allow default contenteditable behavior
