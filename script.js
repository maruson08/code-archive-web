// ========================================
// 전역 변수
// ========================================

let currentCode = null;

// ========================================
// 초기화 함수
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    renderCodeList(codesData);
    setupEventListeners();
});

// ========================================
// 이벤트 리스너 설정
// ========================================

function setupEventListeners() {
    // 검색 입력
    document.getElementById('searchInput').addEventListener('keyup', filterAndRender);

    // 카테고리 필터
    document.getElementById('categoryFilter').addEventListener('change', filterAndRender);

    // 모달 닫기
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('codeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // 복사 버튼
    document.getElementById('copyBtn').addEventListener('click', copyCode);

    // 다운로드 버튼
    document.getElementById('downloadBtn').addEventListener('click', downloadCode);
}

// ========================================
// 필터링 및 렌더링
// ========================================

function filterAndRender() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    const filtered = codesData.filter(code => {
        const matchesSearch = code.title.toLowerCase().includes(searchTerm) ||
                             code.subject.toLowerCase().includes(searchTerm) ||
                             code.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = selectedCategory === '' || code.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderCodeList(filtered);
}

// ========================================
// 코드 카드 렌더링
// ========================================

function renderCodeList(codes) {
    const codeList = document.getElementById('codeList');
    const resultCount = document.getElementById('resultCount');

    if (codes.length === 0) {
        codeList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">🔍</div>
                <h3>검색 결과가 없습니다</h3>
                <p>다른 검색어나 카테고리를 시도해보세요</p>
            </div>
        `;
        resultCount.textContent = '코드 0개';
        return;
    }

    codeList.innerHTML = codes.map(code => {
        return `
            <div class="code-card" onclick="openModal(${code.id})">
                <h3 class="code-card-title">${escapeHtml(code.title)}</h3>
                <div class="code-card-info">
                    <span class="badge">${escapeHtml(code.subject)}</span>
                    <span class="badge category-${getCategoryClass(code.category)}">${escapeHtml(code.category)}</span>
                </div>
                <p class="code-card-description">${escapeHtml(code.description)}</p>
                <div class="code-card-file">
                    📄 ${escapeHtml(code.file)}
                </div>
            </div>
        `;
    }).join('');

    resultCount.textContent = `코드 ${codes.length}개`;
}

// ========================================
// 모달 함수
// ========================================

function openModal(codeId) {
    const code = codesData.find(c => c.id === codeId);
    if (!code) return;

    currentCode = code;

    document.getElementById('modalTitle').textContent = code.title;
    document.getElementById('modalSubject').textContent = code.subject;
    document.getElementById('modalCategory').textContent = code.category;
    document.getElementById('modalFile').textContent = `📄 ${code.file}`;
    document.getElementById('codeContent').textContent = code.code;

    document.getElementById('codeModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('codeModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentCode = null;
}

// ========================================
// 코드 복사
// ========================================

function copyCode() {
    if (!currentCode) return;

    const codeText = currentCode.code;

    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;

        btn.textContent = '✅ 복사되었습니다!';
        btn.style.backgroundColor = 'var(--secondary-color)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 2000);
    }).catch(() => {
        alert('코드 복사에 실패했습니다.');
    });
}

// ========================================
// 코드 다운로드
// ========================================

function downloadCode() {
    if (!currentCode) return;

    const filename = `${currentCode.title.replace(/[^a-zA-Z0-9]/g, '_')}.py`;
    const element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(currentCode.code));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    const btn = document.getElementById('downloadBtn');
    const originalText = btn.textContent;

    btn.textContent = '✅ 다운로드 시작됨!';
    btn.style.backgroundColor = 'var(--secondary-color)';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
    }, 2000);
}

// ========================================
// 유틸리티 함수
// ========================================

function getCategoryClass(category) {
    const classMap = {
        'DP': 'dp',
        '분할정복': 'search',
        '해시': 'hash',
        '탐색': 'search',
        '백트래킹': 'backtrack',
        '자료구조': 'search',
        '그래프': 'dp',
        '그리디': 'search'
    };
    return classMap[category] || 'dp';
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
