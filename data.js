// 코드 아카이브 데이터
const codesData = [
    {
        id: 1,
        title: "거스름돈 문제 - 그리디 알고리즘",
        subject: "알고리즘 성능 분석",
        category: "그리디",
        file: "6주차)_알고리즘_성능_분석_발표자료_제출.ipynb",
        description: "화폐 단위를 기준으로 거스름돈을 가장 효율적으로 나누는 그리디 실습 코드입니다.",
        code: `def check_multiplicative(denoms):
    for i in range(len(denoms) - 1):
        if denoms[i] % denoms[i + 1] != 0:
            return False
    return True


def greedy_change(denoms, change, stock=None):
    result = {d: 0 for d in denoms}

    for d in denoms:
        if change <= 0:
            break
        cnt = change // d if stock is None else min(change // d, stock[d])
        result[d] = cnt
        change -= cnt * d

    return None if change != 0 else result`
    },
    {
        id: 2,
        title: "Prim 알고리즘으로 MST 구성",
        subject: "그래프 알고리즘",
        category: "그래프",
        file: "6주차)_알고리즘_성능_분석_발표자료_제출.ipynb",
        description: "시작 정점에서부터 가장 작은 간선을 이어 붙이며 최소 신장 트리를 만드는 프림 알고리즘입니다.",
        code: `def prim_mst(graph, start):
    visited = {start}
    total_cost = 0
    edges = []

    while len(visited) < len(graph):
        candidate = None
        for node in visited:
            for nxt, cost in graph[node]:
                if nxt not in visited and (candidate is None or cost < candidate[2]):
                    candidate = (node, nxt, cost)
        if candidate is None:
            break
        u, v, cost = candidate
        edges.append((u, v, cost))
        total_cost += cost
        visited.add(v)

    return edges, total_cost`
    },
    {
        id: 3,
        title: "최대 부분배열 합 - 분할정복",
        subject: "분할정복",
        category: "분할정복",
        file: "8차시_DP_1조 (1).ipynb",
        description: "배열을 반으로 나누고, 왼쪽/오른쪽/교차 구간의 합을 비교해 최대값을 찾는 구현입니다.",
        code: `def max_crossing_sum(arr, left, mid, right):
    left_sum = float('-inf')
    s = 0
    for i in range(mid, left - 1, -1):
        s += arr[i]
        left_sum = max(left_sum, s)

    right_sum = float('-inf')
    s = 0
    for i in range(mid + 1, right + 1):
        s += arr[i]
        right_sum = max(right_sum, s)

    return left_sum + right_sum


def maximum_subarray_dnc(arr, left, right):
    if left == right:
        return arr[left]
    mid = (left + right) // 2
    left_best = maximum_subarray_dnc(arr, left, mid)
    right_best = maximum_subarray_dnc(arr, mid + 1, right)
    cross_best = max_crossing_sum(arr, left, mid, right)
    return max(left_best, right_best, cross_best)`
    },
    {
        id: 4,
        title: "최대 부분배열 합 - DP",
        subject: "동적계획법",
        category: "DP",
        file: "8차시_DP_1조 (1).ipynb",
        description: "현재 위치에서 이어갈지 새로 시작할지 선택하면서 최대 합을 갱신하는 동적계획법 코드입니다.",
        code: `def maximum_subarray_dp(arr):
    current = best = arr[0]
    for value in arr[1:]:
        current = max(value, current + value)
        best = max(best, current)
    return best`
    },
    {
        id: 5,
        title: "8차시 DP 발표 - 동적계획법 비교 실습",
        subject: "동적계획법 발표",
        category: "DP",
        file: "8차시_DP_발표.ipynb",
        description: "8차시 발표 자료에 포함된 DP 실습 코드로, 분할정복과 동적계획법의 차이를 비교한 내용입니다.",
        code: `def compare_methods(arr):
    dnc = maximum_subarray_dnc(arr, 0, len(arr) - 1)
    dp = maximum_subarray_dp(arr)
    return {"분할정복": dnc, "동적계획법": dp}`
    },
    {
        id: 6,
        title: "Sudoku Solver - 백트래킹",
        subject: "백트래킹",
        category: "백트래킹",
        file: "9차시_Backtracking_1조_발표_자료 (2).ipynb",
        description: "빈칸을 하나씩 채워가며 제약 조건을 확인하는 백트래킹 기반 스도쿠 풀이입니다.",
        code: `def solve_sudoku(board):
    empty = find_empty(board)
    if not empty:
        return True

    row, col = empty
    for num in range(1, 5):
        if is_valid(board, row, col, num):
            board[row][col] = num
            if solve_sudoku(board):
                return True
            board[row][col] = 0
    return False`
    },
    {
        id: 7,
        title: "문자열 내 최소 반복 단위",
        subject: "문자열 탐구",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "문자열이 몇 번 반복된 단위로 구성되는지 확인하는 실습 코드입니다.",
        code: `def min_repeat_unit(s):
    n = len(s)
    for size in range(1, n + 1):
        if n % size == 0 and s == s[:size] * (n // size):
            return size
    return n`
    },
    {
        id: 8,
        title: "Boyer-Moore 문자열 탐색",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "오른쪽 끝에서부터 비교하며 불일치 위치를 이용해 패턴을 빠르게 찾는 방식입니다.",
        code: `def build_bad_match(pattern):
    table = {}
    for i in range(len(pattern) - 1):
        table[pattern[i]] = len(pattern) - 1 - i
    return table


def boyer_moore(text, pattern):
    bad = build_bad_match(pattern)
    i = len(pattern) - 1
    result = []

    while i < len(text):
        j = len(pattern) - 1
        while j >= 0 and text[i] == pattern[j]:
            i -= 1
            j -= 1
        if j < 0:
            result.append(i + 1)
            i += len(pattern)
        else:
            i += bad.get(text[i], len(pattern))

    return result`
    },
    {
        id: 9,
        title: "KMP 알고리즘 - LPS 테이블",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "패턴의 접두/접미사 정보를 이용해 문자열을 한 번에 건너뛰며 탐색하는 코드입니다.",
        code: `def build_lps(pattern):
    lps = [0] * len(pattern)
    j = 0
    for i in range(1, len(pattern)):
        while j > 0 and pattern[i] != pattern[j]:
            j = lps[j - 1]
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j
    return lps`
    },
    {
        id: 10,
        title: "Rabin-Karp 해시 탐색",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "해시 값을 이용해 패턴 비교 범위를 줄여 문자열을 빠르게 찾는 방식입니다.",
        code: `def rabin_karp(text, pattern, q):
    d = 2
    m = len(pattern)
    n = len(text)
    h = pow(d, m - 1) % q
    p_hash = 0
    t_hash = 0
    result = []

    for i in range(m):
        p_hash = (d * p_hash + ord(pattern[i])) % q
        t_hash = (d * t_hash + ord(text[i])) % q

    for i in range(n - m + 1):
        if p_hash == t_hash and text[i:i + m] == pattern:
            result.append(i)
        if i < n - m:
            t_hash = (d * (t_hash - ord(text[i]) * h) + ord(text[i + m])) % q
    return result`
    },
    {
        id: 11,
        title: "문제 5번 - 조합 최적화",
        subject: "알고리즘",
        category: "DP",
        file: "정보과학_5주차_4조_(손원희,_송연경,_주윤재).ipynb",
        description: "아이템의 가치와 개수를 이용해 최적 조합을 찾는 동적계획법 문제 풀이입니다.",
        code: `def solve_optimization(items):
    dp = [0] * (len(items) + 1)
    for i, value in enumerate(items, start=1):
        dp[i] = max(dp[i - 1], dp[i - 1] + value)
    return dp[-1]`
    },
    {
        id: 12,
        title: "문제 6번 - 경로 찾기",
        subject: "알고리즘",
        category: "DP",
        file: "정보과학_5주차_4조_(손원희,_송연경,_주윤재).ipynb",
        description: "격자 위에서 가능한 경로 수를 누적해 계산하는 동적계획법 코드입니다.",
        code: `def count_paths(m, n):
    dp = [[1] * n for _ in range(m)]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    return dp[m - 1][n - 1]`
    },
    {
        id: 13,
        title: "선형 탐사 - 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "충돌이 발생하면 다음 칸을 순차적으로 확인하는 선형 탐사 방식입니다.",
        code: `class HashTableLinearProbing:
    def __init__(self, size=7):
        self.size = size
        self.table = [None] * size

    def hash_fn(self, key):
        return key % self.size

    def insert(self, key, value):
        idx = self.hash_fn(key)
        while self.table[idx] is not None:
            idx = (idx + 1) % self.size
        self.table[idx] = (key, value)

    def search(self, key):
        idx = self.hash_fn(key)
        while self.table[idx] is not None and self.table[idx][0] != key:
            idx = (idx + 1) % self.size
        return None if self.table[idx] is None else self.table[idx][1]`
    },
    {
        id: 14,
        title: "제곱 탐사 - 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "충돌 시 제곱 간격으로 빈 자리를 확인하는 제곱 탐사 방식입니다.",
        code: `class HashTableQuadraticProbing:
    def __init__(self, size=7):
        self.size = size
        self.table = [None] * size

    def hash_fn(self, key):
        return key % self.size

    def insert(self, key, value):
        idx = self.hash_fn(key)
        step = 1
        while self.table[idx] is not None:
            idx = (self.hash_fn(key) + step * step) % self.size
            step += 1
        self.table[idx] = (key, value)`
    },
    {
        id: 15,
        title: "Double Hashing - 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "두 개의 해시 함수를 함께 써서 충돌 가능성을 낮추는 방식입니다.",
        code: `class DoubleHashing:
    def __init__(self, size=7):
        self.size = size
        self.table = [None] * size

    def hash1(self, key):
        return key % self.size

    def hash2(self, key):
        return 1 + (key % (self.size - 1))

    def insert(self, key, value):
        idx = self.hash1(key)
        step = self.hash2(key)
        while self.table[idx] is not None:
            idx = (idx + step) % self.size
        self.table[idx] = (key, value)`
    },
    {
        id: 16,
        title: "Rehashing - 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "테이블이 꽉 찼을 때 크기를 늘려 다시 배치하는 리해싱 방식입니다.",
        code: `def rehash(table, new_size):
    new_table = [None] * new_size
    for item in table:
        if item is not None:
            key, value = item
            idx = key % new_size
            while new_table[idx] is not None:
                idx = (idx + 1) % new_size
            new_table[idx] = (key, value)
    return new_table`
    },
    {
        id: 17,
        title: "3-B 해시 방식",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "3개로 나눈 블록을 기준으로 해시 인덱스를 계산하는 실습 코드입니다.",
        code: `def hash3b(key, size):
    digits = [int(ch) for ch in str(key)]
    return sum(digits) % size`
    }
];
