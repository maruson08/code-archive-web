// 코드 아카이브 데이터 — 기존 항목과 mine 항목 병합본
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
        title: "Rabin-Karp로 최장 공통 부분 문자열 찾기",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "해시 기반으로 부분 문자열의 존재 여부를 빠르게 확인하며, 길이를 이분 탐색으로 늘려가며 공통 문자열을 찾는 코드입니다.",
        code: `def rabin_karp_check(s1, s2, length, q=1000000007):
    if length == 0:
        return True

    d = 256
    h = pow(d, length - 1, q)
    hash_set = set()

    h1 = 0
    for i in range(length):
        h1 = (d * h1 + ord(s1[i])) % q
    hash_set.add(h1)

    for i in range(len(s1) - length):
        h1 = (d * (h1 - ord(s1[i]) * h) + ord(s1[i + length])) % q
        if h1 < 0:
            h1 += q
        hash_set.add(h1)

    h2 = 0
    for i in range(length):
        h2 = (d * h2 + ord(s2[i])) % q

    if h2 in hash_set:
        if s2[0:length] in s1:
            return True

    for i in range(len(s2) - length):
        h2 = (d * (h2 - ord(s2[i]) * h) + ord(s2[i + length])) % q
        if h2 < 0:
            h2 += q

        if h2 in hash_set:
            sub = s2[i + 1:i + 1 + length]
            if sub in s1:
                return True

    return False


def longest_common_substring(s1, s2):
    left, right = 0, min(len(s1), len(s2))
    answer = 0

    while left <= right:
        mid = (left + right) // 2

        if rabin_karp_check(s1, s2, mid):
            answer = mid
            left = mid + 1
        else:
            right = mid - 1

    return answer`
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
    },
    {
        id: 18,
        title: "광고 삽입 최적 구간 - 분할정복",
        subject: "분할정복",
        category: "분할정복",
        file: "7주차)_분할정복_발표자료_제출.ipynb",
        description: "시청자 누적합을 이용해 광고 구간의 최대 시청자 수를 분할정복으로 찾는 코드입니다.",
        code: `def best_ad_section(total, M, logs):
    if M <= 0 or M > total:
        raise ValueError("M must be between 1 and total")

    viewers = [0] * total
    current = 0
    for t in range(total):
        current += sum(1 for start, end in logs if start <= t < end)
        viewers[t] = current

    window_sum = []
    current_sum = sum(viewers[:M])
    window_sum.append(current_sum)

    for i in range(1, total - M + 1):
        current_sum += viewers[i + M - 1]
        current_sum -= viewers[i - 1]
        window_sum.append(current_sum)

    def divide(left, right):
        if left == right:
            return window_sum[left], left
        mid = (left + right) // 2
        left_result = divide(left, mid)
        right_result = divide(mid + 1, right)
        return left_result if left_result[0] >= right_result[0] else right_result

    if not logs:
        return 0, 0

    return divide(0, len(window_sum) - 1)`
    },
    {
        id: 19,
        title: "큐 구현 - 연결 리스트 기반",
        subject: "자료구조",
        category: "자료구조",
        file: "Queue.ipynb",
        description: "노드 연결 구조로 큐의 삽입, 삭제, 출력 기능을 구현한 코드입니다.",
        code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.front = None
        self.tail = None

    def enQueue(self, num):
        new = Node(num)
        if self.tail is None:
            self.front = new
            self.tail = new
        else:
            self.tail.next = new
            self.tail = new

    def deQueue(self):
        if self.front is None:
            return None
        temp = self.front.data
        if self.front.next:
            self.front = self.front.next
        else:
            self.front = None
            self.tail = None
        return temp`
    },
    {
        id: 20,
        title: "Heap Tree 구현 - 최소 힙",
        subject: "자료구조",
        category: "자료구조",
        file: "Queue.ipynb",
        description: "우선순위 큐를 구현하기 위해 힙 구조를 직접 만든 코드입니다.",
        code: `class Heap:
    def __init__(self):
        self.heap = []

    def push(self, value):
        self.heap.append(value)
        idx = len(self.heap) - 1
        while idx > 0:
            parent = (idx - 1) // 2
            if self.heap[parent] <= self.heap[idx]:
                break
            self.heap[parent], self.heap[idx] = self.heap[idx], self.heap[parent]
            idx = parent

    def pop(self):
        if not self.heap:
            return None
        root = self.heap[0]
        last = self.heap.pop()
        if self.heap:
            self.heap[0] = last
            self._sift_down(0)
        return root

    def _sift_down(self, idx):
        size = len(self.heap)
        while True:
            left = idx * 2 + 1
            right = left + 1
            smallest = idx
            if left < size and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < size and self.heap[right] < self.heap[smallest]:
                smallest = right
            if smallest == idx:
                break
            self.heap[idx], self.heap[smallest] = self.heap[smallest], self.heap[idx]
            idx = smallest`
    },
    {
        id: 21,
        title: "다익스트라 최단 경로 알고리즘",
        subject: "그래프 알고리즘",
        category: "그래프",
        file: "Queue.ipynb",
        description: "가중치가 있는 그래프에서 최단 경로를 찾는 다익스트라 알고리즘 구현입니다.",
        code: `def dijkstra(graph, start):
    INF = float('inf')
    dist = {node: INF for node in graph}
    dist[start] = 0
    visited = set()

    while len(visited) < len(graph):
        current = None
        for node in graph:
            if node not in visited and (current is None or dist[node] < dist[current]):
                current = node
        if current is None or dist[current] == INF:
            break
        visited.add(current)
        for nxt, weight in graph[current]:
            if dist[current] + weight < dist[nxt]:
                dist[nxt] = dist[current] + weight

    return dist`
    },
    {
        id: 22,
        title: "선형 탐사 기반 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "개방 주소법의 가장 기본적인 충돌 해결 전략인 선형 탐사를 직접 구현한 코드입니다.\n\n키를 해시 함수에 넣어 최초 인덱스를 계산한 뒤, 이미 데이터가 저장되어 있으면 인덱스를 한 칸씩 증가시키며 빈 위치를 찾습니다. 배열 끝에 도달하면 모듈러 연산으로 처음 위치로 돌아가므로 해시 테이블 전체를 순환 탐색할 수 있습니다. 삽입뿐 아니라 검색과 삭제 과정에서도 동일한 탐사 경로를 재현하며, 삭제된 위치와 한 번도 사용되지 않은 위치를 구분하기 위해 tombstone 개념을 적용합니다.\n\n평균적으로 적재율이 낮을 때 삽입·검색·삭제는 O(1)에 가깝지만, 데이터가 연속된 영역에 몰리는 1차 군집화가 발생하면 최악의 경우 O(n)까지 느려질 수 있습니다. 테스트 셀에는 실제 삽입, 검색, 삭제 및 테이블 상태 확인 과정이 포함되어 있어 충돌 이후 탐사 경로를 관찰할 수 있습니다.",
        code: `class HashTableLinearProbing:

    def __init__(self, size=7):
        self.size = size
        self.table = [None] * size

    def hash_fn(self, key):
        return key % self.size

    def insert(self, key, value):
        idx = self.hash_fn(key)
        start = idx

        while (self.table[idx] is not None and
               self.table[idx] != DELETED and
               self.table[idx][0] != key):

            idx = (idx + 1) % self.size
            if idx == start:
                print("해시 테이블이 가득참")
                return

        self.table[idx] = (key, value)

    def search(self, key):
        idx = self.hash_fn(key)
        start = idx

        while self.table[idx] is not None:
            if self.table[idx] != DELETED and self.table[idx][0] == key:
                return self.table[idx][1]

            idx = (idx + 1) % self.size
            if idx == start:
                break

        return None

    def delete(self, key):
        idx = self.hash_fn(key)
        start = idx

        while self.table[idx] is not None:
            if self.table[idx] != DELETED and self.table[idx][0] == key:
                self.table[idx] = DELETED
                return True

            idx = (idx + 1) % self.size
            if idx == start:
                break

        return False

    def display(self):
        print("\\n[ 선형 탐사 상태 ]")
        for i, slot in enumerate(self.table):
            print(f"  [{i}] {slot}")
        print()

# ────────────────────────────────────────────────────────────────────────

ht = HashTableLinearProbing()

data = [
    (7, "A"),
    (14, "B"),
    (21, "C"),
    (28, "D"),
    (8, "E"),
    (15, "F"),
    (22, "G"),
]

print("삽입 과정")
for k, v in data:
    idx = ht.hash_fn(k)
    print(f"insert({k}, '{v}') -> hash index = {idx}")
    ht.insert(k, v)

ht.display()

print("[ 검색 테스트 ]")
print("search(7)  =", ht.search(7))
print("search(14) =", ht.search(14))
print("search(21) =", ht.search(21))
print("search(28) =", ht.search(28))
print("search(8)  =", ht.search(8))
print("search(15) =", ht.search(15))
print("search(22) =", ht.search(22))
print("search(100) =", ht.search(100))   # 없는 값

ht.display()

# 테이블 가득 차는 테스트
print("\\n[ 테이블 가득 참 테스트 ]")
ht.insert(22, "G")
ht.insert(29, "H") # 가득 찰 가능성 있음

ht.display()`
    },
    {
        id: 23,
        title: "제곱 탐사 기반 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "충돌이 발생했을 때 1², 2², 3²처럼 제곱 간격으로 이동하며 빈 슬롯을 찾는 제곱 탐사 구현입니다.\n\n선형 탐사처럼 바로 옆 칸만 확인하지 않고 점점 더 큰 간격으로 이동하므로 연속된 데이터 덩어리가 형성되는 1차 군집화를 줄이는 효과가 있습니다. 최초 해시값을 기준으로 탐사 횟수의 제곱을 더한 뒤 테이블 크기로 나머지를 구해 다음 인덱스를 결정합니다. 검색과 삭제 역시 삽입 때와 같은 제곱 탐사 순서를 따라야 올바른 데이터를 찾을 수 있습니다.\n\n테이블 크기와 탐사식의 관계에 따라 모든 슬롯을 방문하지 못할 가능성이 있으므로, 일반적으로 소수 크기의 테이블과 적절한 적재율 관리가 필요합니다. 평균 시간 복잡도는 O(1)에 가깝지만 충돌이 많거나 탐사 순환이 발생하면 O(n)에 가까워질 수 있습니다.",
        code: `class HashTableQuadraticProbing:
    def __init__(self, size = 7):
        self.size = size
        self.table = [None] * size

    def hash_fn(self, key):
        return key % self.size

    def insert(self, key, value):
        h = self.hash_fn(key)
        i = 0

        while True:
            idx = (h + i * i) % self.size

            if (self.table[idx] is None or
                self.table[idx] == DELETED or
                self.table[idx][0] == key):

                self.table[idx] = (key, value)
                return

            i += 1
            h = idx

            if i == self.size:
                print("해시 테이블이 가득참")
                return

    def search(self, key):
        h = self.hash_fn(key)
        i = 0

        while True:
            idx = (h + i * i) % self.size

            if self.table[idx] is None:
                return None

            if self.table[idx] != DELETED and self.table[idx][0] == key:
                return self.table[idx][1]

            i += 1
            if i == self.size:
                return None

    def delete(self, key):
        h = self.hash_fn(key)
        i = 0

        while True:
            idx = (h + i * i) % self.size

            if self.table[idx] is None:
                return False

            if self.table[idx] != DELETED and self.table[idx][0] == key:
                self.table[idx] = DELETED
                return True

            i += 1
            if i == self.size:
                return False

    def display(self):
        print("\\n[ 제곱 탐사 상태 ]")
        for i, slot in enumerate(self.table):
            print(f"  [{i}] {slot}")
        print()

# ────────────────────────────────────────────────────────────────────────

ht = HashTableQuadraticProbing()

data = [
    (7, "A"),
    (14, "B"),
    (21, "C"),
    (28, "D"),
    (8, "E"),
    (15, "F"),
    (22, "G"),
]

print("삽입 과정")
for k, v in data:
    idx = ht.hash_fn(k)
    print(f"insert({k}, '{v}') -> hash index = {idx}")
    ht.insert(k, v)

ht.display()

print("[ 검색 테스트 ]")
print("search(7)  =", ht.search(7))
print("search(14) =", ht.search(14))
print("search(21) =", ht.search(21))
print("search(28) =", ht.search(28))
print("search(8)  =", ht.search(8))
print("search(15) =", ht.search(15))
print("search(22) =", ht.search(22))
print("search(100) =", ht.search(100))   # 없는 값

ht.display()

print("\\n[ 테이블 가득 참 테스트 ]")
ht.insert(22, "G")
ht.insert(29, "H")

ht.display()`
    },
    {
        id: 24,
        title: "이중 해싱 기반 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "두 개의 서로 다른 해시 함수를 이용해 충돌 시 이동 간격을 결정하는 이중 해싱 구현입니다.\n\n첫 번째 해시 함수는 데이터가 처음 배치될 위치를 정하고, 두 번째 해시 함수는 충돌이 발생할 때마다 얼마만큼 이동할지를 정합니다. 키마다 이동 간격이 달라지므로 선형 탐사의 1차 군집화와 제곱 탐사의 2차 군집화를 모두 완화할 수 있습니다. 코드에는 소수 판별 및 테이블 크기에 적합한 보조 해시값을 만들기 위한 함수도 포함되어 있습니다.\n\n삽입, 검색, 삭제는 모두 동일한 두 해시 함수와 탐사 횟수를 사용합니다. 이동 간격과 테이블 크기가 서로소가 아니면 일부 슬롯만 반복 방문할 수 있기 때문에, 테이블 크기를 소수로 두거나 두 번째 해시 함수가 0을 반환하지 않도록 설계하는 것이 중요합니다. 정상적인 적재율에서는 평균 O(1), 최악에는 O(n)의 시간 복잡도를 가집니다.",
        code: `def findPrimeNum(n):
    for num in range(n - 1, 1, -1):
        if all(num % i != 0 for i in range(2, int(num**0.5) + 1)):
            return num
    return 2

# ────────────────────────────────────────────────────────────────────────

class DoubleHashing():
    def __init__(self, size=7, method='division', group_size=2):
        self.size = size
        self.group_size = group_size
        self.table = [None] * size
        self.method = method
        self._prime = findPrimeNum(size)

    def hash_fn(self, key):
        if self.method == 'division':
            return key % self.size
        elif self.method == 'folding':
            s = str(key)
            total = 0
            for i in range(0, len(s), self.group_size):
                total += int(s[i:i+self.group_size])
            return total % self.size
        else:
            raise ValueError(f"{self.method}는 지원하지 않는 해싱 방법입니다.")

    def hash_fn2(self, key):
        return (key % self._prime) + 1

    def _probe(self, key):
        h1, h2 = self.hash_fn(key), self.hash_fn2(key)
        for i in range(self.size):
            yield (h1 + i * h2) % self.size

    def insert(self, key, value):
        first_deleted = None
        for idx in self._probe(key):
            slot = self.table[idx]
            if slot is None:
                self.table[first_deleted if first_deleted is not None else idx] = (key, value)
                return
            if slot is DELETED:
                if first_deleted is None:
                    first_deleted = idx
            elif slot[0] == key:
                self.table[idx] = (key, value)
                return

        if first_deleted is not None:
            self.table[first_deleted] = (key, value)
        else:
            print("해시 테이블이 가득 찼습니다.")

    def search(self, key):
        for idx in self._probe(key):
            slot = self.table[idx]
            if slot is None:
                return None
            if slot is not DELETED and slot[0] == key:
                return slot[1]
        return None

    def delete(self, key):
        for idx in self._probe(key):
            slot = self.table[idx]
            if slot is None:
                print("삭제 실패: 해당 key 없음")
                return
            if slot is not DELETED and slot[0] == key:
                self.table[idx] = DELETED
                print("삭제 완료")
                return
        print("삭제 실패: 해당 key 없음")

    def display(self):
        label = '나눗셈법' if self.method == 'division' else '자릿수 접기'
        print(f"\\n[ 이중 해싱 테이블 ({label}, Size: {self.size}) ]")
        for i, slot in enumerate(self.table):
            if slot is DELETED:
                print(f"  [{i}] <삭제됨>")
            else:
                print(f"  [{i}] {slot}")
        print()

# ────────────────────────────────────────────────────────────────────────

# ── division 방식 ──────────────────────────────────────────────
print("=" * 45)
print("  이중 해싱 테스트 — 나눗셈법 (Division)")
print("=" * 45)

dh_div = DoubleHashing(size=7, method='division')

print("\\n▶ insert")
dh_div.insert(10, 'apple')
dh_div.insert(17, 'banana')   # 10 % 7 == 17 % 7 == 3 → 충돌
dh_div.insert(24, 'cherry')   # 24 % 7 == 3 → 또 충돌
dh_div.insert(5,  'date')
dh_div.display()

print("▶ search")
print(f"  key=10 → {dh_div.search(10)}")   # apple
print(f"  key=17 → {dh_div.search(17)}")   # banana
print(f"  key=24 → {dh_div.search(24)}")   # cherry
print(f"  key=99 → {dh_div.search(99)}")   # None (없는 키)

print("\\n▶ delete → 탐묘석 확인")
dh_div.delete(17)                           # 삭제 완료
dh_div.delete(17)                           # 삭제 실패: 없음
print(f"  key=17 삭제 후 search → {dh_div.search(17)}")   # None
print(f"  key=24 체인 유지 확인  → {dh_div.search(24)}")  # cherry (체인 안 끊겨야 함)
dh_div.display()

print("▶ 중복 키 덮어쓰기")
dh_div.insert(10, 'avocado')
print(f"  key=10 → {dh_div.search(10)}")   # avocado
dh_div.display()


# ── folding 방식 ───────────────────────────────────────────────
print("=" * 45)
print("  이중 해싱 테스트 — 자릿수 접기 (Folding)")
print("=" * 45)

dh_fol = DoubleHashing(size=7, method='folding', group_size=2)

print("\\n▶ insert")
dh_fol.insert(1234, 'lion')    # 12+34=46 → 46%7=4
dh_fol.insert(3412, 'tiger')   # 34+12=46 → 46%7=4 → 충돌
dh_fol.insert(5600, 'bear')    # 56+00=56 → 56%7=0
dh_fol.insert(1111, 'wolf')    # 11+11=22 → 22%7=1
dh_fol.display()

print("▶ search")
print(f"  key=1234 → {dh_fol.search(1234)}")  # lion
print(f"  key=3412 → {dh_fol.search(3412)}")  # tiger
print(f"  key=9999 → {dh_fol.search(9999)}")  # None

print("\\n▶ delete → 탐묘석 확인")
dh_fol.delete(1234)
print(f"  key=1234 삭제 후 search → {dh_fol.search(1234)}")  # None
print(f"  key=3412 체인 유지 확인  → {dh_fol.search(3412)}") # tiger
dh_fol.display()

print("▶ 테이블 꽉 채우기")
dh_small = DoubleHashing(size=3, method='division')
dh_small.insert(1, 'a')
dh_small.insert(2, 'b')
dh_small.insert(3, 'c')
dh_small.insert(4, 'd')   # 가득 참 메시지 출력`
    },
    {
        id: 25,
        title: "리해싱과 탐사 방식 확장",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "해시 테이블의 적재율이 높아질 때 더 큰 배열을 생성하고 기존 데이터를 다시 배치하는 리해싱 구현입니다.\n\n단순히 기존 배열을 복사하는 것이 아니라 새 테이블 크기를 기준으로 모든 키의 해시값을 다시 계산해야 한다는 점을 코드로 보여 줍니다. 이중 해싱 클래스에 리해싱 기능을 추가한 버전과, 공통 리해싱 로직을 Mixin으로 분리해 선형 탐사·제곱 탐사·이중 해싱 클래스에 재사용하는 다중 상속 구조가 함께 포함되어 있습니다.\n\n리해싱 한 번은 저장된 원소 수에 비례해 O(n)이 걸리지만, 테이블을 일정 배수로 확장하면 여러 삽입 연산에 비용이 분산되어 평균 삽입 비용은 상수 시간에 가깝게 유지됩니다. 클래스 재사용, 적재율 관리, 새 크기 선정, 기존 원소 재삽입을 함께 다루는 확장형 실습 코드입니다.",
        code: `class DoubleHashingWithRehashing(DoubleHashing):
  def __init__(self, size=7, method='division', group_size=2):
    super().__init__(size, method, group_size)

  def _rehash(self):
    old_table = self.table
    self.size *= 2
    self.table = [None] * self.size
    self._prime = findPrimeNum(self.size)
    for slot in old_table:
        if slot is not None and slot is not DELETED:
            self.insert(slot[0], slot[1])

  def insert(self, key, value):
      occupied = sum(1 for s in self.table if s is not None and s is not DELETED) + 1
      if occupied / self.size > 0.75:
          self._rehash()

      first_deleted = None
      for idx in self._probe(key):
          slot = self.table[idx]
          if slot is None:
              self.table[first_deleted if first_deleted is not None else idx] = (key, value)
              return
          if slot is DELETED:
              if first_deleted is None:
                  first_deleted = idx
          elif slot[0] == key:
              self.table[idx] = (key, value)
              return
      if first_deleted is not None:
        self.table[first_deleted] = (key, value)

# ────────────────────────────────────────────────────────────────────────

# ── 기본 삽입 / 조회 ──────────────────────────────────────────
print("=" * 50)
print("  기본 삽입 / 조회")
print("=" * 50)

dh = DoubleHashingWithRehashing(size=7, method='division')
dh.insert(10, 'apple')
dh.insert(17, 'banana')  # 10 % 7 == 17 % 7 == 3 → 충돌
dh.insert(24, 'cherry')  # 24 % 7 == 3 → 또 충돌
dh.insert(5,  'date')
dh.display()

print(f"  search(10) → {dh.search(10)}")  # apple
print(f"  search(17) → {dh.search(17)}")  # banana
print(f"  search(24) → {dh.search(24)}")  # cherry
print(f"  search(99) → {dh.search(99)}")  # None


# ── 리해싱 트리거 (삭제 없이 삽입만으로 70% 초과) ────────────
print("\\n" + "=" * 50)
print("  리해싱 트리거 — 삽입만으로 occupied > 70%")
print("=" * 50)

dh2 = DoubleHashingWithRehashing(size=10, method='division')
keys = [1, 2, 13, 4, 15, 6, 7, 8, 19, 20]  # 9번째 insert에서 리해싱

for k in keys:
    occupied_before = sum(1 for s in dh2.table if s is not None and s is not DELETED)
    size_before = dh2.size
    dh2.insert(k, f'val{k}')
    if dh2.size != size_before:
        print(f"  key={k} 삽입 시 리해싱 발생: size {size_before} → {dh2.size}")

dh2.display()
print("  리해싱 후 데이터 정합성 확인")
for k in keys:
    print(f"  search({k}) → {dh2.search(k)}")  # 전부 정상 조회


# ── 삭제 후 탐묘석 → 탐색 체인 유지 ─────────────────────────
print("\\n" + "=" * 50)
print("  삭제 후 탐묘석 → 체인 유지 확인")
print("=" * 50)

dh3 = DoubleHashingWithRehashing(size=7, method='division')
dh3.insert(10, 'apple')
dh3.insert(17, 'banana')  # 충돌 → 프로브 체인에 삽입
dh3.insert(24, 'cherry')  # 충돌 → 프로브 체인에 삽입

dh3.delete(17)            # 체인 중간 삭제 → DELETED
print(f"  key=17 삭제 후 search(17) → {dh3.search(17)}")  # None
print(f"  체인 유지 확인 search(24) → {dh3.search(24)}")  # cherry (끊기면 None)
dh3.display()


# ── 삭제 후 재삽입 → 탐묘석 재활용 ──────────────────────────
print("=" * 50)
print("  탐묘석 슬롯 재활용 확인")
print("=" * 50)

dh4 = DoubleHashingWithRehashing(size=7, method='division')
dh4.insert(10, 'apple')
dh4.insert(17, 'banana')
dh4.delete(17)

idx_before = [i for i, s in enumerate(dh4.table) if s is DELETED]
dh4.insert(17, 'newbanana')
idx_after  = [i for i, s in enumerate(dh4.table) if s is DELETED]

print(f"  재삽입 전 DELETED 슬롯: {idx_before}")
print(f"  재삽입 후 DELETED 슬롯: {idx_after}")   # 재활용돼서 줄어야 함
print(f"  search(17) → {dh4.search(17)}")          # newbanana

# ────────────────────────────────────────────────────────────────────────

class RehashingMixin:
    th = 0.75

    def _rehash(self):
        old_table = self.table
        self.size *= 2
        self.table = [None] * self.size
        self._prime = findPrimeNum(self.size)
        for slot in old_table:
            if slot is not None and slot is not DELETED:
                self.insert(slot[0], slot[1])

    def insert(self, key, value):
        occupied = sum(1 for s in self.table if s is not None and s is not DELETED) + 1
        if occupied / self.size > self.th:
            self._rehash()
        super().insert(key, value)

# ────────────────────────────────────────────────────────────────────────

class ReDouble(RehashingMixin, DoubleHashing):
    pass

# ────────────────────────────────────────────────────────────────────────

# ── 기본 삽입 / 조회 ──────────────────────────────────────────
print("=" * 50)
print("  기본 삽입 / 조회")
print("=" * 50)

dh = ReDouble(size=7, method='division')
dh.insert(10, 'apple')
dh.insert(17, 'banana')  # 10 % 7 == 17 % 7 == 3 → 충돌
dh.insert(24, 'cherry')  # 24 % 7 == 3 → 또 충돌
dh.insert(5,  'date')
dh.display()

print(f"  search(10) → {dh.search(10)}")  # apple
print(f"  search(17) → {dh.search(17)}")  # banana
print(f"  search(24) → {dh.search(24)}")  # cherry
print(f"  search(99) → {dh.search(99)}")  # None


# ── 리해싱 트리거 (삭제 없이 삽입만으로 70% 초과) ────────────
print("\\n" + "=" * 50)
print("  리해싱 트리거 — 삽입만으로 occupied > 70%")
print("=" * 50)

dh2 = ReDouble(size=10, method='division')
keys = [1, 2, 13, 4, 15, 6, 7, 8, 19, 20]  # 9번째 insert에서 리해싱

for k in keys:
    occupied_before = sum(1 for s in dh2.table if s is not None and s is not DELETED)
    size_before = dh2.size
    dh2.insert(k, f'val{k}')
    if dh2.size != size_before:
        print(f"  key={k} 삽입 시 리해싱 발생: size {size_before} → {dh2.size}")

dh2.display()
print("  리해싱 후 데이터 정합성 확인")
for k in keys:
    print(f"  search({k}) → {dh2.search(k)}")  # 전부 정상 조회


# ── 삭제 후 탐묘석 → 탐색 체인 유지 ─────────────────────────
print("\\n" + "=" * 50)
print("  삭제 후 탐묘석 → 체인 유지 확인")
print("=" * 50)

dh3 = ReDouble(size=7, method='division')
dh3.insert(10, 'apple')
dh3.insert(17, 'banana')  # 충돌 → 프로브 체인에 삽입
dh3.insert(24, 'cherry')  # 충돌 → 프로브 체인에 삽입

dh3.delete(17)            # 체인 중간 삭제 → DELETED
print(f"  key=17 삭제 후 search(17) → {dh3.search(17)}")  # None
print(f"  체인 유지 확인 search(24) → {dh3.search(24)}")  # cherry (끊기면 None)
dh3.display()


# ── 삭제 후 재삽입 → 탐묘석 재활용 ──────────────────────────
print("=" * 50)
print("  탐묘석 슬롯 재활용 확인")
print("=" * 50)

dh4 = ReDouble(size=7, method='division')
dh4.insert(10, 'apple')
dh4.insert(17, 'banana')
dh4.delete(17)

idx_before = [i for i, s in enumerate(dh4.table) if s is DELETED]
dh4.insert(17, 'newbanana')
idx_after  = [i for i, s in enumerate(dh4.table) if s is DELETED]

print(f"  재삽입 전 DELETED 슬롯: {idx_before}")
print(f"  재삽입 후 DELETED 슬롯: {idx_after}")   # 재활용돼서 줄어야 함
print(f"  search(17) → {dh4.search(17)}")          # newbanana

# ────────────────────────────────────────────────────────────────────────

class ReQuad(RehashingMixin, HashTableQuadraticProbing):
    pass

# ────────────────────────────────────────────────────────────────────────

ht = ReQuad()

data = [
    (7, "A"),
    (14, "B"),
    (21, "C"),
    (28, "D"),
    (8, "E"),
    (15, "F"),
    (22, "G"),
]

print("삽입 과정")
for k, v in data:
    idx = ht.hash_fn(k)
    print(f"insert({k}, '{v}') -> hash index = {idx}")
    ht.insert(k, v)

ht.display()

print("[ 검색 테스트 ]")
print("search(7)  =", ht.search(7))
print("search(14) =", ht.search(14))
print("search(21) =", ht.search(21))
print("search(28) =", ht.search(28))
print("search(8)  =", ht.search(8))
print("search(15) =", ht.search(15))
print("search(22) =", ht.search(22))
print("search(100) =", ht.search(100))   # 없는 값

ht.display()

# ────────────────────────────────────────────────────────────────────────

class ReLinear(RehashingMixin, HashTableLinearProbing):
    th = 0.9

# ────────────────────────────────────────────────────────────────────────

ht = ReLinear()

data = [
    (7, "A"),
    (14, "B"),
    (21, "C"),
    (28, "D"),
    (8, "E"),
    (15, "F"),
    (22, "G"),
]

print("삽입 과정")
for k, v in data:
    idx = ht.hash_fn(k)
    print(f"insert({k}, '{v}') -> hash index = {idx}")
    ht.insert(k, v)

ht.display()

print("[ 검색 테스트 ]")
print("search(7)  =", ht.search(7))
print("search(14) =", ht.search(14))
print("search(21) =", ht.search(21))
print("search(28) =", ht.search(28))
print("search(8)  =", ht.search(8))
print("search(15) =", ht.search(15))
print("search(22) =", ht.search(22))
print("search(100) =", ht.search(100))

ht.display()`
    },
    {
        id: 26,
        title: "숫자 카드 존재 여부 판별",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "보유한 숫자 카드 집합에 질의 숫자가 존재하는지를 빠르게 판별하는 해시 기반 문제 풀이입니다.\n\n카드 목록을 집합 또는 직접 구성한 해시 구조에 저장한 뒤, 각 질의에 대해 포함 여부를 확인해 1과 0으로 출력합니다. 모든 카드를 매 질의마다 순차 탐색하는 방식은 O(NM)이지만, 해시 집합을 사용하면 전처리 O(N) 이후 각 질의를 평균 O(1)에 처리하여 전체 평균 시간 복잡도를 O(N+M)으로 줄일 수 있습니다.\n\n입력 예외 처리와 반복 실행용 테스트 흐름이 포함되어 있으며, 해시 테이블이 단순 저장 구조를 넘어 대량의 멤버십 질의를 효율적으로 처리하는 데 어떻게 활용되는지 보여 주는 코드입니다.",
        code: `def solution(N, cards, M, queries):

    ht = ReDouble(size=1000003, method='division')
    m = M
    for card in cards:
      if card < 10_000_001 and card > -10_000_001:
        current = ht.search(card)
        if current is None:
            ht.insert(card, 1)
        else:
            ht.insert(card, current + 1)
      else:
        m = m-1
    print('최대 입력 가능 쿼리 개수: ',m)
    return [ht.search(q) or 0 for q in queries]

# ────────────────────────────────────────────────────────────────────────

while True:
  N = int(input("카드 개수: "))
  if N == 0:
    break
  cards = list(map(int, input("카드: ").split()))
  M = int(input("쿼리 개수: "))
  queries = list(map(int, input("쿼리: ").split()))
  result = solution(N, cards, M, queries)
  print(' '.join(map(str, result)))

# ────────────────────────────────────────────────────────────────────────

print("=" * 50)
print("  기본 예제")
print("=" * 50)
N = 5
cards = [6, 3, 2, 10, 10]
M = 4
queries = [10, 9, -5, 2]
result = solution(N, cards, M, queries)
print(f"  입력 카드:  {cards}")
print(f"  쿼리:       {queries}")
print(f"  출력:       {' '.join(map(str, result))}")
# 10 → 2장, 9 → 0장, -5 → 0장, 2 → 1장
# 기댓값: 2 0 0 1


print("\\n" + "=" * 50)
print("  음수 카드")
print("=" * 50)
N = 4
cards = [-10_000_000, -10_000_000, -1, 0]
M = 3
queries = [-10_000_000, -1, 0]
result = solution(N, cards, M, queries)
print(f"  입력 카드:  {cards}")
print(f"  쿼리:       {queries}")
print(f"  출력:       {' '.join(map(str, result))}")
# 기댓값: 2 1 1


print("\\n" + "=" * 50)
print("  카드가 아예 없는 숫자만 조회")
print("=" * 50)
N = 3
cards = [1, 2, 3]
M = 3
queries = [4, 5, 6]
result = solution(N, cards, M, queries)
print(f"  입력 카드:  {cards}")
print(f"  쿼리:       {queries}")
print(f"  출력:       {' '.join(map(str, result))}")
# 기댓값: 0 0 0


print("\\n" + "=" * 50)
print("  카드 전부 동일한 숫자")
print("=" * 50)
N = 5
cards = [7, 7, 7, 7, 7]
M = 2
queries = [7, 1]
result = solution(N, cards, M, queries)
print(f"  입력 카드:  {cards}")
print(f"  쿼리:       {queries}")
print(f"  출력:       {' '.join(map(str, result))}")
# 기댓값: 5 0


print("\\n" + "=" * 50)
print("  경계값 (±10,000,000)")
print("=" * 50)
N = 4
cards = [10_000_000, 10_000_000, -10_000_000, -10_000_000]
M = 3
queries = [10_000_000, -10_000_000, 0]
result = solution(N, cards, M, queries)
print(f"  입력 카드:  {cards}")
print(f"  쿼리:       {queries}")
print(f"  출력:       {' '.join(map(str, result))}")
# 기댓값: 2 2 0


# print("\\n" + "=" * 50)
# print("  대량 입력 성능 테스트 (N=M=500,000)")
# print("=" * 50)
# import random, time
# random.seed(42)
# N = 500_000
# cards = [random.randint(-10_000_000, 10_000_000) for _ in range(N)]
# M = 500_000
# queries = [random.randint(-10_000_000, 10_000_000) for _ in range(M)]

# start = time.time()
# result = solution(N, cards, M, queries)
# elapsed = time.time() - start

# print(f"  카드 {N:,}개 삽입 + 쿼리 {M:,}개 조회")
# print(f"  소요 시간: {elapsed:.3f}초")
# print(f"  쿼리 결과 샘플 (앞 10개): {result[:10]}")`
    },
    {
        id: 27,
        title: "거스름돈 그리디 알고리즘과 화폐 체계 검증",
        subject: "알고리즘 성능 분석",
        category: "그리디",
        file: "6주차)_알고리즘_성능_분석_발표자료_제출.ipynb",
        description: "큰 화폐 단위부터 가능한 만큼 선택해 거스름돈을 구성하는 그리디 알고리즘입니다.\n\n먼저 화폐 단위가 서로 배수 관계를 이루는지 검사하여 큰 단위부터 선택하는 전략이 항상 최적해를 보장할 가능성을 확인합니다. 실제 계산에서는 현재 남은 금액을 화폐 단위로 나눈 몫만큼 사용하고 나머지를 다음 단위로 넘깁니다. 재고 제한이 있는 경우에는 필요한 개수와 보유 개수 중 더 작은 값을 선택하도록 확장되어 있습니다.\n\n화폐 종류가 k개라면 기본 계산은 O(k)이며, 결과는 각 화폐 단위별 사용 개수로 정리됩니다. 다만 임의의 화폐 체계에서는 그리디가 최소 동전 수를 보장하지 않을 수 있으므로, 코드가 포함한 배수 관계 검사와 실패 처리 부분이 알고리즘 적용 조건을 설명하는 핵심입니다.",
        code: `def check_multiplicative(denoms):
    """
    배수 관계 검사:
    큰 화폐가 작은 화폐의 배수인지 확인
    (정렬된 상태 기준)
    """
    for i in range(len(denoms) - 1):
        if denoms[i] % denoms[i + 1] != 0:
            return False
    return True


def greedy_change(denoms, change, stock=None):
    """
    그리디 알고리즘으로 거스름돈 계산
    - stock: None이면 무한, dict이면 유한
    """
    result = {d: 0 for d in denoms}

    for d in denoms:
        if change <= 0:
            break

        if stock is None:
            # 무한 화폐
            cnt = change // d
        else:
            # 유한 화폐
            cnt = min(change // d, stock[d])

        result[d] = cnt
        change -= cnt * d

    if change != 0:
        return None  # 불가능
    return result

def changeF():
  print("=== 1단계: 화폐 단위 입력 ===")
  denoms = list(map(int, input("화폐 단위를 큰 순서대로 입력 (예: 50000 10000 5000 1000): ").split()))
  denoms.sort(reverse=True)

  if not check_multiplicative(denoms):
      print("배수 관계가 아니므로 그리디 알고리즘이 최적해를 보장하지 않습니다.")
      return

  print("✔ 배수 관계 확인 완료")

  print("\\n=== 2단계: 화폐 보유 수량 ===")
  mode = input("무한 화폐인가요? (y/n): ").strip().lower()

  stock = None

  if mode == 'n':
      stock = {}
      print("각 화폐별 보유 수량 입력:")
      for d in denoms:
          stock[d] = int(input(f"{d}원: "))

  print("\\n=== 3단계: 거래 정보 ===")
  paid = int(input("지불 금액: "))
  price = int(input("구매 금액: "))

  change = paid - price

  if change < 0:
      print("금액이 부족합니다.")
      return

  print(f"거스름돈: {change}원")

  print("\\n=== 4단계: 결과 ===")

  result = greedy_change(denoms, change, stock)

  if result is None:
      print("보유 화폐 부족으로 거스름돈 지급 불가")
  else:
      print("거스름돈 지급 결과:")
      for d in denoms:
          if result[d] > 0:
              print(f"{d}원 × {result[d]}개")

# ────────────────────────────────────────────────────────────────────────

changeF()`
    },
    {
        id: 28,
        title: "우선순위 큐 기반 Prim 최소 신장 트리",
        subject: "그래프 알고리즘",
        category: "그래프",
        file: "6주차)_알고리즘_성능_분석_발표자료_제출.ipynb",
        description: "가중치가 있는 무방향 그래프에서 Prim 알고리즘으로 최소 신장 트리(MST)를 구성하는 코드입니다.\n\n시작 정점을 방문 집합에 넣고, 현재 트리와 연결되는 모든 간선을 최소 힙에 저장합니다. 힙에서 가장 가중치가 작은 간선을 꺼냈을 때 도착 정점이 아직 방문되지 않았다면 해당 간선을 MST에 추가하고, 새 정점에서 나가는 간선을 다시 힙에 삽입합니다. 이미 방문한 정점으로 향하는 간선은 사이클을 만들 수 있으므로 건너뜁니다.\n\n인접 리스트와 우선순위 큐를 사용하면 시간 복잡도는 일반적으로 O(E log V)입니다. 코드에는 그래프 클래스, 간선 추가, 선택된 MST 간선 및 총 가중치 출력, 예제 그래프 실행까지 포함되어 있어 알고리즘의 단계별 진행을 확인할 수 있습니다.",
        code: `import heapq
from collections import defaultdict

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = defaultdict(list)

    def add_edge(self, u, v, w):
        # 무방향 그래프
        self.graph[u].append((w, v))
        self.graph[v].append((w, u))

    def prim_mst(self, start=0):
        visited = set()
        min_heap = [(0, start, -1)]  # (weight, current_node, parent_node)
        mst_edges = []
        total_cost = 0

        while min_heap and len(visited) < self.V:
            weight, u, parent = heapq.heappop(min_heap)

            if u in visited:
                continue

            visited.add(u)
            total_cost += weight
            if parent != -1:
                mst_edges.append((parent, u, weight))

            for w, v in self.graph[u]:
                if v not in visited:
                    heapq.heappush(min_heap, (w, v, u))

        print("MST 간선 목록:")
        for u, v, w in mst_edges:
            print(f"{u} - {v} (weight={w})")

        print("\\n총 비용:", total_cost)

# ────────────────────────────────────────────────────────────────────────

g = Graph(5)

g.add_edge(1, 2, 1)
g.add_edge(1, 3, 3)
g.add_edge(2, 3, 3)
g.add_edge(2, 4, 6)
g.add_edge(3, 4, 4)
g.add_edge(3, 5, 2)
g.add_edge(4, 5, 5)

g.prim_mst(2)`
    },
    {
        id: 29,
        title: "가장 가까운 두 점 찾기",
        subject: "분할정복",
        category: "분할정복",
        file: "7주차)_분할정복_발표자료_제출(1).ipynb",
        description: "2차원 평면에 주어진 점들 중 유클리드 거리가 가장 가까운 두 점의 거리를 분할정복으로 구하는 코드입니다.\n\n점을 x좌표 기준으로 정렬한 뒤 절반으로 나누고, 왼쪽과 오른쪽 영역의 최소 거리를 재귀적으로 계산합니다. 이후 중앙선에서 현재 최소 거리 이내에 있는 점만 strip으로 모아 y좌표 순으로 정렬하고, 기하학적 성질에 따라 각 점의 뒤쪽 최대 7개 정도만 비교해 양쪽 영역을 가로지르는 더 짧은 거리가 있는지 검사합니다.\n\n브루트포스의 O(n²) 비교를 O(n log² n) 수준으로 줄이는 구조이며, y정렬 결과까지 재귀적으로 관리하면 O(n log n)으로 개선할 수 있습니다. 중복 점, 동일한 x좌표, 음수 좌표, 큰 입력 등 다양한 단위 테스트가 함께 들어 있어 정확성과 경계 조건을 검증합니다.",
        code: `import math

def dist(p1, p2):
    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

def closest_pair(points):
    points.sort(key=lambda p: p[0])

    def divide(points):
        n = len(points)
        if n <= 3:
            min_d = float('inf')
            for i in range(n):
                for j in range(i + 1, n):
                    min_d = min(min_d, dist(points[i], points[j]))
            return min_d

        mid = n // 2
        mid_x = points[mid][0]
        d = min(divide(points[:mid]), divide(points[mid:]))

        strip = [p for p in points if abs(p[0] - mid_x) <= d]
        strip.sort(key=lambda p: p[1])

        for i in range(len(strip)):
            for j in range(i + 1, min(i + 8, len(strip))):
                if strip[j][1] - strip[i][1] >= d:
                    break
                d = min(d, dist(strip[i], strip[j]))
        return d

    return divide(points)

# ────────────────────────────────────────────────────────────────────────

n = int(input())
if n < 2:
    print("점이 2개 이상 필요합니다.")
    exit()

points = [tuple(map(float, input().split())) for _ in range(n)]
print(f"{closest_pair(points):.2f}")

# ────────────────────────────────────────────────────────────────────────

import unittest

def brute_force(points):
    min_d = float('inf')
    for i in range(len(points)):
        for j in range(i + 1, len(points)):
            min_d = min(min_d, dist(points[i], points[j]))
    return min_d

# ── 테스트 ─────────────────────────────────────────────────────────────────
class TestClosestPair(unittest.TestCase):

    def assertClose(self, result, expected, msg=None):
        self.assertAlmostEqual(result, expected, places=2, msg=msg)

    def test_two_points(self):
        """점 2개 — 최소 입력"""
        points = [(0.0, 0.0), (3.0, 4.0)]
        self.assertClose(closest_pair(points), 5.0)

    def test_three_points(self):
        """점 3개 — 베이스케이스 직접 실행"""
        points = [(0.0, 0.0), (1.0, 0.0), (5.0, 5.0)]
        self.assertClose(closest_pair(points), 1.0)

    def test_four_points(self):
        """점 4개 — 재귀 첫 분기"""
        points = [(0.0, 0.0), (1.0, 1.0), (5.0, 5.0), (6.0, 6.0)]
        self.assertClose(closest_pair(points), math.sqrt(2))

    def test_simple_known(self):
        """교과서 예제"""
        points = [(2.0, 3.0), (12.0, 30.0), (40.0, 50.0),
                  (5.0, 1.0), (12.0, 10.0), (3.0, 4.0)]
        self.assertClose(closest_pair(points), brute_force(points))

    def test_duplicate_points(self):
        """중복 좌표 — 거리 0 반환해야 함"""
        points = [(1.0, 1.0), (1.0, 1.0), (5.0, 5.0)]
        self.assertClose(closest_pair(points), 0.0)

    def test_all_same_x(self):
        """모든 점 x좌표 동일 — strip에 전부 들어가는 케이스"""
        points = [(0.0, i * 1.0) for i in range(6)]
        self.assertClose(closest_pair(points), 1.0)

    def test_all_same_y(self):
        """모든 점 y좌표 동일 — 수평선 위"""
        points = [(i * 1.0, 0.0) for i in range(6)]
        self.assertClose(closest_pair(points), 1.0)

    def test_collinear_diagonal(self):
        """대각선 위의 점들"""
        points = [(i * 1.0, i * 1.0) for i in range(5)]
        self.assertClose(closest_pair(points), math.sqrt(2))

    def test_closest_across_dividing_line(self):
        """최근접 쌍이 경계선을 가로지르는 케이스 (strip 검사 핵심)"""
        points = [(0.0, 0.0), (1.0, 0.1), (10.0, 0.0), (11.0, 0.0)]
        self.assertClose(closest_pair(points), brute_force(points))

    def test_negative_coordinates(self):
        """음수 좌표"""
        points = [(-3.0, -4.0), (-1.0, -1.0), (0.0, 0.0), (2.0, 2.0)]
        self.assertClose(closest_pair(points), brute_force(points))

    def test_float_coordinates(self):
        """실수 좌표"""
        points = [(0.5, 0.5), (0.6, 0.5), (10.0, 10.0)]
        self.assertClose(closest_pair(points), 0.1)

    def test_large_coordinates(self):
        """큰 좌표값"""
        points = [(1e6, 1e6), (1e6 + 1, 1e6), (0.0, 0.0)]
        self.assertClose(closest_pair(points), 1.0)

    def test_random_vs_brute_force_small(self):
        """랜덤 소규모: 분할정복 결과 == 브루트포스 결과"""
        import random
        random.seed(42)
        for _ in range(50):
            n = random.randint(2, 10)
            pts = [(random.uniform(-100, 100), random.uniform(-100, 100))
                   for _ in range(n)]
            self.assertClose(closest_pair(pts[:]), brute_force(pts),
                             msg=f"실패한 포인트: {pts}")

    def test_random_vs_brute_force_large(self):
        """랜덤 중규모: n=100~500"""
        import random
        random.seed(7)
        for _ in range(10):
            n = random.randint(100, 500)
            pts = [(random.uniform(-1000, 1000), random.uniform(-1000, 1000))
                   for _ in range(n)]
            self.assertClose(closest_pair(pts[:]), brute_force(pts),
                             msg=f"n={n}에서 실패")

    def test_performance_large_n(self):
        """n=10000에서 3초 이내 완료 여부"""
        import random, time
        random.seed(0)
        pts = [(random.uniform(0, 1e6), random.uniform(0, 1e6))
               for _ in range(10000)]
        start = time.time()
        closest_pair(pts)
        elapsed = time.time() - start
        self.assertLess(elapsed, 3.0, f"너무 느림: {elapsed:.2f}초")


# ── 코랩용 실행 ────────────────────────────────────────────────────────────
loader = unittest.TestLoader()
suite = loader.loadTestsFromTestCase(TestClosestPair)
runner = unittest.TextTestRunner(verbosity=2)
runner.run(suite)`
    },
    {
        id: 30,
        title: "광고 삽입 최적 구간 탐색",
        subject: "분할정복",
        category: "분할정복",
        file: "7주차)_분할정복_발표자료_제출(1).ipynb",
        description: "시청 로그를 바탕으로 정해진 길이의 광고를 삽입했을 때 누적 시청 시간이 최대가 되는 시작 구간을 찾는 코드입니다.\n\n각 시간대의 동시 시청자 수를 계산한 뒤, 길이 M의 구간 합을 슬라이딩 윈도우 방식으로 생성합니다. 인접 구간으로 한 칸 이동할 때 새로 들어오는 값은 더하고 빠지는 값은 빼므로 모든 구간 합을 선형 시간에 만들 수 있습니다. 이후 구간 합 배열에서 최댓값과 해당 시작 위치를 분할정복으로 선택합니다.\n\n입력 길이와 광고 길이에 대한 유효성 검사, 빈 로그 처리, 직접 입력 예제, 여러 경계 조건을 확인하는 테스트 코드가 포함되어 있습니다. 시청자 배열 생성 방식에 따라 전체 성능이 달라질 수 있으며, 차분 배열과 누적합을 사용하면 대규모 로그에서도 더 효율적으로 확장할 수 있습니다.",
        code: `def best_ad_section(total, M, logs):
    # 입력 검증
    if not (0 < M <= total):
        raise ValueError(f"M={M}이 유효하지 않습니다.")

    # 1. 초별 시청자 수 계산 (Sweep Line)
    timeline = [0] * (total + 1)

    for start, end in logs:
        if not (0 <= start < end <= total):
            raise ValueError(f"잘못된 로그: ({start}, {end})")

        timeline[start] += 1
        timeline[end] -= 1

    viewers = [0] * total
    current = 0

    for t in range(total):
        current += timeline[t]
        viewers[t] = current

    # 2. 길이 M 구간 합 계산 (Sliding Window)
    window_sum = []

    current_sum = sum(viewers[:M])
    window_sum.append(current_sum)

    for i in range(1, total - M + 1):
        current_sum += viewers[i + M - 1]
        current_sum -= viewers[i - 1]
        window_sum.append(current_sum)

    # 3. Divide and Conquer
    def divide(left, right):
        if left == right:
            return (window_sum[left], left)

        mid = (left + right) // 2

        left_result = divide(left, mid)
        right_result = divide(mid + 1, right)

        # 동점이면 더 이른 시각(left) 선택
        if left_result[0] >= right_result[0]:
            return left_result

        return right_result

    # 로그가 없는 경우
    if not logs:
        print("초별 시청자 수:", viewers)
        print("광고 시작 시각:", 0)
        return

    max_view, best_start = divide(0, len(window_sum) - 1)

    # 출력 양식
    print("초별 시청자 수:", viewers)
    print("광고 시작 시각:", best_start)

# ────────────────────────────────────────────────────────────────────────

toal = 10
M = 3
logs = [(1,5),(2,6),(3,7),(4,8),(5,9)]

best_ad_section(toal, M, logs)

# ────────────────────────────────────────────────────────────────────────

toal = int(input('total: '))
M = int(input('M: '))

logNum = int(input('logNum: '))

logs = []

for i in range(logNum):
  logs.append(tuple(map(int, input().split())))

best_ad_section(toal, M, logs)

# ────────────────────────────────────────────────────────────────────────

# ============================================
# 광고 삽입 최적 구간 - 수정된 코드 + 테스트
# ============================================

import unittest
import time
import sys


# -----------------------------------------------
# 컬러 출력 헬퍼
# -----------------------------------------------
class C:
    RESET  = "\\033[0m"
    BOLD   = "\\033[1m"
    DIM    = "\\033[2m"
    GREEN  = "\\033[92m"
    RED    = "\\033[91m"
    YELLOW = "\\033[93m"
    BLUE   = "\\033[94m"
    CYAN   = "\\033[96m"
    WHITE  = "\\033[97m"
    GRAY   = "\\033[90m"

def c(color, text): return f"{color}{text}{C.RESET}"


# -----------------------------------------------
# 커스텀 테스트 러너
# -----------------------------------------------
class PrettyTestResult(unittest.TestResult):

    CATEGORIES = {
        "일반": C.BLUE,
        "엣지": C.YELLOW,
        "예외": C.CYAN,
    }

    def __init__(self):
        super().__init__()
        self.results = []   # (status, name, desc, elapsed, msg)
        self._start_time = None

    def startTest(self, test):
        self._start_time = time.time()

    def _record(self, status, test, msg=None):
        elapsed = time.time() - self._start_time
        name = test._testMethodName
        desc = test.shortDescription() or ""
        self.results.append((status, name, desc, elapsed, msg))

    def addSuccess(self, test):
        self._record("PASS", test)

    def addFailure(self, test, err):
        super().addFailure(test, err)
        msg = str(err[1])
        self._record("FAIL", test, msg)

    def addError(self, test, err):
        super().addError(test, err)
        msg = str(err[1])
        self._record("ERROR", test, msg)

    def print_report(self, elapsed_total):
        # 카테고리 순서 정의
        category_order = ["일반", "엣지", "예외"]

        # 카테고리별로 결과 분류
        categorized = {cat: [] for cat in category_order}
        for r in self.results:
            name = r[1]  # e.g. "test_기본_예제" or "test_M_equals_0"
            placed = False
            for cat in category_order:
                # 테스트 이름으로 카테고리 추정 (메서드명 기반)
                if name in _CATEGORY_MAP.get(cat, []):
                    categorized[cat].append(r)
                    placed = True
                    break
            if not placed:
                categorized["일반"].append(r)

        total  = len(self.results)
        passed = sum(1 for r in self.results if r[0] == "PASS")
        failed = sum(1 for r in self.results if r[0] == "FAIL")
        errors = sum(1 for r in self.results if r[0] == "ERROR")

        W = 62

        # 헤더
        print()
        print(c(C.BOLD + C.WHITE, "┌" + "─" * W + "┐"))
        title = "광고 가성비 챙기기 — 테스트 결과"
        pad = (W - len(title)) // 2
        print(c(C.BOLD + C.WHITE, "│") + " " * pad + c(C.BOLD + C.WHITE, title) + " " * (W - pad - len(title)) + c(C.BOLD + C.WHITE, "│"))
        print(c(C.BOLD + C.WHITE, "└" + "─" * W + "┘"))
        print()

        # 카테고리별 결과
        for cat in category_order:
            items = categorized[cat]
            if not items:
                continue
            cat_color = self.CATEGORIES.get(cat, C.WHITE)
            print(c(C.BOLD + cat_color, f"  {cat} 케이스"))
            print(c(C.GRAY, "  " + "─" * (W - 2)))
            for status, name, desc, elapsed, msg in items:
                if status == "PASS":
                    icon   = c(C.GREEN,  "  ✅")
                    label  = c(C.GREEN,  "PASS")
                    t_str  = c(C.GRAY,   f"{elapsed*1000:.1f}ms")
                elif status == "FAIL":
                    icon   = c(C.RED,    "  ❌")
                    label  = c(C.RED,    "FAIL")
                    t_str  = c(C.GRAY,   f"{elapsed*1000:.1f}ms")
                else:
                    icon   = c(C.YELLOW, "  💥")
                    label  = c(C.YELLOW, "ERR ")
                    t_str  = c(C.GRAY,   f"{elapsed*1000:.1f}ms")

                desc_str = c(C.GRAY, f" {desc}") if desc else ""
                print(f"{icon} {label}  {name}{desc_str}  {t_str}")

                if msg:
                    for line in msg.splitlines()[:2]:
                        print(c(C.GRAY, f"         → {line.strip()}"))
            print()

        # 구분선
        print(c(C.GRAY, "  " + "─" * (W - 2)))

        # 요약
        bar_total = 30
        bar_pass  = round(bar_total * passed / total) if total else 0
        bar_fail  = bar_total - bar_pass
        bar = c(C.GREEN, "█" * bar_pass) + c(C.RED, "█" * bar_fail)

        print(f"\\n  {bar}  {c(C.BOLD, f'{passed}/{total}')} 통과\\n")

        cols = [
            (C.GREEN,  "✅ 성공", passed),
            (C.RED,    "❌ 실패", failed),
            (C.YELLOW, "💥 에러", errors),
            (C.GRAY,   "🕐 시간", f"{elapsed_total*1000:.0f}ms"),
        ]
        row = "  ".join(f"{c(color, label)}: {c(C.BOLD, str(val))}" for color, label, val in cols)
        print(f"  {row}\\n")

        if failed == 0 and errors == 0:
            print(c(C.BOLD + C.GREEN, "  🎉 모든 테스트 통과!\\n"))
        else:
            print(c(C.BOLD + C.RED, f"  ⚠️  {failed + errors}개 실패. 코드를 확인하세요.\\n"))


# 카테고리-메서드명 매핑
_CATEGORY_MAP = {
    "일반": [
        "test_기본_예제",
        "test_동점_가장_이른_시각_선택",
        "test_M_equals_total",
        "test_최대_구간이_맨_끝에_위치",
        "test_모든_구간_동일",
        "test_시청자_한_명",
    ],
    "엣지": [
        "test_빈_로그",
        "test_M_equals_1",
        "test_end_equals_total_정상처리",
        "test_시청_구간_겹침_없음",
        "test_시청자_전구간_완전_겹침",
    ],
    "예외": [
        "test_M_greater_than_total",
        "test_M_equals_0",
        "test_M_negative",
        "test_end_greater_than_total",
        "test_start_negative",
        "test_start_greater_equal_end",
    ],
}


# -----------------------------------------------
# 테스트 클래스
# -----------------------------------------------
class TestBestAdSection(unittest.TestCase):

    # 일반 케이스
    def test_기본_예제(self):
        """문제 예시 그대로"""
        max_v, start = best_ad_section(10, 3, [(1,5),(2,6),(3,7),(4,8),(5,9)])
        self.assertEqual(start, 3)
        self.assertEqual(max_v, 11)

    def test_동점_가장_이른_시각_선택(self):
        """3~5와 4~6 구간 동점 → 시작 3"""
        _, start = best_ad_section(10, 3, [(1,5),(2,6),(3,7),(4,8),(5,9)])
        self.assertEqual(start, 3)

    def test_M_equals_total(self):
        """M = total → window 하나, start=0"""
        max_v, start = best_ad_section(5, 5, [(0,3),(1,4),(2,5)])
        self.assertEqual(start, 0)
        self.assertGreater(max_v, 0)

    def test_최대_구간이_맨_끝에_위치(self):
        """시청자가 뒤쪽에 몰린 경우"""
        max_v, start = best_ad_section(6, 2, [(4,6),(4,6),(4,6)])
        self.assertEqual(start, 4)
        self.assertEqual(max_v, 6)

    def test_모든_구간_동일(self):
        """전 구간 시청자 동일 → 가장 이른 시작(0)"""
        max_v, start = best_ad_section(5, 2, [(0,5)])
        self.assertEqual(start, 0)
        self.assertEqual(max_v, 2)

    def test_시청자_한_명(self):
        """시청자 단 한 명"""
        max_v, start = best_ad_section(10, 3, [(2,7)])
        self.assertEqual(max_v, 3)
        self.assertEqual(start, 2)

    # 엣지 케이스
    def test_빈_로그(self):
        """시청자 없음 → 누적합 0, start=0"""
        max_v, start = best_ad_section(10, 3, [])
        self.assertEqual(max_v, 0)
        self.assertEqual(start, 0)

    def test_M_equals_1(self):
        """광고 1초 → 동점이면 이른 시각"""
        max_v, start = best_ad_section(5, 1, [(0,1),(1,3),(1,3),(1,3)])
        self.assertEqual(max_v, 3)
        self.assertEqual(start, 1)

    def test_end_equals_total_정상처리(self):
        """end=total 올바르게 감소 처리"""
        max_v, start = best_ad_section(5, 2, [(3,5)])
        self.assertEqual(max_v, 2)
        self.assertEqual(start, 3)

    def test_시청_구간_겹침_없음(self):
        """모든 시청자가 다른 시간대 → 동점, 이른 시각"""
        max_v, start = best_ad_section(9, 3, [(0,3),(3,6),(6,9)])
        self.assertEqual(max_v, 3)
        self.assertEqual(start, 0)

    def test_시청자_전구간_완전_겹침(self):
        """모든 시청자 동일 구간"""
        max_v, start = best_ad_section(5, 2, [(1,4),(1,4),(1,4)])
        self.assertEqual(max_v, 6)
        self.assertEqual(start, 1)

    # 예외 케이스
    def test_M_greater_than_total(self):
        """M > total → ValueError"""
        with self.assertRaises(ValueError):
            best_ad_section(3, 5, [(0,3)])

    def test_M_equals_0(self):
        """M = 0 → ValueError"""
        with self.assertRaises(ValueError):
            best_ad_section(5, 0, [(0,5)])

    def test_M_negative(self):
        """M 음수 → ValueError"""
        with self.assertRaises(ValueError):
            best_ad_section(5, -1, [(0,5)])

    def test_end_greater_than_total(self):
        """end > total → ValueError"""
        with self.assertRaises(ValueError):
            best_ad_section(5, 2, [(0,10)])

    def test_start_negative(self):
        """start < 0 → ValueError"""
        with self.assertRaises(ValueError):
            best_ad_section(5, 2, [(-1,3)])

    def test_start_greater_equal_end(self):
        """start >= end → ValueError"""
        with self.assertRaises(ValueError):
            best_ad_section(5, 2, [(3,3)])


# -----------------------------------------------
# 실행
# -----------------------------------------------
if __name__ == '__main__':
    loader = unittest.TestLoader()
    loader.sortTestMethodsUsing = None  # 선언 순서 유지
    suite  = loader.loadTestsFromTestCase(TestBestAdSection)

    pretty = PrettyTestResult()
    t0 = time.time()
    suite.run(pretty)
    pretty.print_report(time.time() - t0)`
    },
    {
        id: 31,
        title: "최장 공통 부분 수열 복원",
        subject: "동적계획법",
        category: "DP",
        file: "8차시_DP_1조 (1).ipynb",
        description: "두 문자열의 최장 공통 부분 수열(LCS) 길이와 실제 수열을 동적계획법으로 구하는 코드입니다.\n\ndp[i][j]는 첫 번째 문자열의 앞 i개 문자와 두 번째 문자열의 앞 j개 문자로 만들 수 있는 LCS 길이를 의미합니다. 두 문자가 같으면 왼쪽 위 값에 1을 더하고, 다르면 위쪽과 왼쪽 값 중 큰 값을 선택합니다. 테이블을 모두 채운 뒤 오른쪽 아래에서 역추적하여 실제 LCS 문자열을 복원합니다.\n\n문자열 길이를 각각 n, m이라 할 때 시간 복잡도와 공간 복잡도는 모두 O(nm)입니다. 최종 DP 테이블 전체를 출력하므로 값이 누적되는 과정과 역추적 기준을 학습하기 좋으며, 길이만 필요하다면 두 행만 유지해 공간을 O(min(n,m))으로 줄일 수 있습니다.",
        code: `str1 = input()
str2 = input()

n = len(str1)
m = len(str2)

dp = [[0] * (m + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    for j in range(1, m + 1):
        if str1[i - 1] == str2[j - 1]:
            dp[i][j] = dp[i - 1][j - 1] + 1
        else:
            if dp[i - 1][j] >= dp[i][j - 1]:
                dp[i][j] = dp[i - 1][j]
            else:
                dp[i][j] = dp[i][j - 1]

i = n
j = m
lcs = ""

while i > 0 and j > 0:
    if str1[i - 1] == str2[j - 1]:
        lcs = str1[i - 1] + lcs
        i -= 1
        j -= 1
    else:
        if dp[i - 1][j] >= dp[i][j - 1]:
            i -= 1
        else:
            j -= 1

for row in dp:
    print(row)

print(lcs)`
    },
    {
        id: 32,
        title: "최대 부분 배열 합: 분할정복과 Kadane 비교",
        subject: "동적계획법",
        category: "DP",
        file: "8차시_DP_1조 (1).ipynb",
        description: "연속 부분 배열 중 원소 합이 최대인 구간의 값을 분할정복과 동적계획법으로 각각 계산하고 결과와 성능을 비교하는 코드입니다.\n\n분할정복 방식은 배열을 절반으로 나누어 왼쪽 최대합, 오른쪽 최대합, 중앙을 가로지르는 최대합을 재귀적으로 구하며 O(n log n)의 시간이 걸립니다. Kadane 알고리즘은 현재 원소에서 새 구간을 시작할지 기존 구간을 이어갈지를 매 단계 선택하여 전체 최댓값을 갱신하므로 O(n) 시간과 O(1) 추가 공간으로 해결합니다.\n\n빈 배열, 전체 음수, 전체 양수, 최대 구간의 위치, 큰 값 등 다양한 테스트 케이스가 포함되어 있고 두 알고리즘의 실행 시간을 직접 측정합니다. 같은 문제를 서로 다른 알고리즘 패러다임으로 해결하며 복잡도 차이를 실험적으로 확인하는 비교 실습입니다.",
        code: `# ── 방법 1: 분할정복 ──────────────────────────────────────────

def max_crossing_sum(arr, left, mid, right):
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

    # 두 합이 모두 유효할 때만 합산 (방어 코드)
    if left_sum == float('-inf') or right_sum == float('-inf'):
        return float('-inf')
    return left_sum + right_sum


def divide_and_conquer(arr, left, right):
    # 빈 배열 방어
    if not arr:
        raise ValueError("배열이 비어 있습니다.")

    if left == right:
        return arr[left]

    mid = (left + right) // 2
    left_max  = divide_and_conquer(arr, left, mid)
    right_max = divide_and_conquer(arr, mid + 1, right)
    cross_max = max_crossing_sum(arr, left, mid, right)

    return max(left_max, right_max, cross_max)


arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(divide_and_conquer(arr, 0, len(arr) - 1))  # 6

# ────────────────────────────────────────────────────────────────────────

# 사용자 입력
user_input = input("배열을 입력하세요 (예: -2,1,-3,4,-1,2,1,-5,4): ")

try:
    arr = list(map(int, user_input.split(',')))
    if not arr:
        raise ValueError("배열이 비어 있습니다.")
except ValueError as e:
    print(f"입력 오류: {e}")
    exit()

print(divide_and_conquer(arr, 0, len(arr) - 1))  # 6

# ────────────────────────────────────────────────────────────────────────


# ── 방법 2: 동적계획법 (Kadane's Algorithm) ───────────────────

def dynamic_programming(arr):
    # 빈 배열 방어
    if not arr:
        raise ValueError("배열이 비어 있습니다.")

    max_sum     = arr[0]   # 전체 최댓값
    current_sum = arr[0]   # 현재까지의 서브배열 합

    for i in range(1, len(arr)):
        # 현재 원소만 취하는 게 나은지, 이어가는 게 나은지 선택
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum     = max(max_sum, current_sum)

    return max_sum


arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(dynamic_programming(arr))  # 6

# ────────────────────────────────────────────────────────────────────────

# 사용자 입력
user_input = input("배열을 입력하세요 (예: -2,1,-3,4,-1,2,1,-5,4): ")

try:
    arr = list(map(int, user_input.split(',')))
    if not arr:
        raise ValueError("배열이 비어 있습니다.")
except ValueError as e:
    print(f"입력 오류: {e}")
    exit()

print(dynamic_programming(arr))

# ────────────────────────────────────────────────────────────────────────

import time

# ── 테스트 케이스 ─────────────────────────────────────────────
test_cases = [
    # (입력 배열, 기댓값, 설명, 카테고리)

    # 기본
    ([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6,   "기본 예제",            "기본"),

    # 원소 개수 경계
    ([5],                               5,   "원소 1개 (양수)",       "경계"),
    ([-5],                             -5,   "원소 1개 (음수)",       "경계"),
    ([0],                               0,   "원소 1개 (0)",          "경계"),
    ([1, 2],                            3,   "원소 2개",              "경계"),

    # 부호
    ([-1, -2, -3, -4],                 -1,   "전부 음수",             "부호"),
    ([1, 2, 3, 4, 5],                  15,   "전부 양수",             "부호"),
    ([0, 0, 0, 0],                      0,   "전부 0",               "부호"),

    # 위치
    ([5, -9, -9, -9],                   5,   "최대 구간이 맨 앞",      "위치"),
    ([-9, -9, -9, 5],                   5,   "최대 구간이 맨 뒤",      "위치"),
    ([-3, 4, 6, -2, -9],               10,   "최대 구간이 중간",       "위치"),
    ([100, -1, -1, 100],              198,   "양 끝이 큰 경우",        "위치"),

    # 특수
    ([0, -1, 0, -1, 0],                 0,   "0과 음수 혼합",          "특수"),
    ([-1, 0, -1, 0, -1],               0,   "음수와 0 혼합",          "특수"),
    ([1, -1, 1, -1, 1],                1,   "양음 반복",              "특수"),
    (list(range(-50, 51)),           1275,   "범위 배열 (-50 ~ 50)",   "특수"),
    ([10**6, -1, 10**6],          1999999,   "큰 수 포함",             "특수"),
]

# ── 테스트 실행 ───────────────────────────────────────────────
def run_tests():
    categories = sorted(set(c for _, _, _, c in test_cases))

    total_dc_pass = 0
    total_dp_pass = 0

    for cat in categories:
        cases = [(a, e, d) for a, e, d, c in test_cases if c == cat]

        print(f"\\n{'━' * 65}")
        print(f"  📂 [{cat}] 테스트 ({len(cases)}개)")
        print(f"{'━' * 65}")
        print(f"  {'#':<3} {'설명':<22} {'DC결과':<10} {'DP결과':<10} {'기댓값':<10} {'DC시간':>8} {'DP시간':>8}  판정")
        print(f"  {'-' * 62}")

        for i, (arr, expected, desc) in enumerate(cases, 1):
            # 분할정복 실행 + 시간 측정
            t0 = time.perf_counter()
            dc_result = divide_and_conquer(arr, 0, len(arr) - 1)
            dc_time = (time.perf_counter() - t0) * 1000  # ms

            # 동적계획법 실행 + 시간 측정
            t0 = time.perf_counter()
            dp_result = dynamic_programming(arr)
            dp_time = (time.perf_counter() - t0) * 1000  # ms

            dc_ok = dc_result == expected
            dp_ok = dp_result == expected
            if dc_ok: total_dc_pass += 1
            if dp_ok: total_dp_pass += 1

            판정 = "✅✅" if dc_ok and dp_ok else ("✅❌" if dc_ok else ("❌✅" if dp_ok else "❌❌"))

            print(f"  {i:<3} {desc:<22} {str(dc_result):<10} {str(dp_result):<10} {str(expected):<10} {dc_time:>6.3f}ms {dp_time:>6.3f}ms  {판정}")

    # ── 최종 요약 ─────────────────────────────────────────────
    total = len(test_cases)
    print(f"\\n{'═' * 65}")
    print(f"  📊 최종 결과")
    print(f"{'═' * 65}")
    print(f"  분할정복  : {total_dc_pass}/{total} 통과 {'✅ ALL PASS' if total_dc_pass == total else '❌ 일부 실패'}")
    print(f"  동적계획법: {total_dp_pass}/{total} 통과 {'✅ ALL PASS' if total_dp_pass == total else '❌ 일부 실패'}")
    print(f"{'═' * 65}")

run_tests()`
    },
    {
        id: 33,
        title: "최대 부분 배열 알고리즘 대화형 시각화",
        subject: "동적계획법 발표",
        category: "알고리즘 시각화",
        file: "8차시_DP_발표(1).ipynb",
        description: "최대 부분 배열 문제를 분할정복, Kadane 알고리즘, 누적합 기반 방식으로 실행하며 내부 진행 과정과 성능을 대화형으로 비교하는 Jupyter 위젯 코드입니다.\n\n데이터 크기와 입력 분포를 사용자가 선택할 수 있고, 각 알고리즘의 실행 결과와 측정 시간을 그래프로 시각화합니다. 작은 입력에서는 알고리즘의 단계별 동작을 확인하고, 큰 입력에서는 입력 크기 증가에 따른 실행 시간 변화를 비교하도록 두 가지 모드로 구성되어 있습니다. 무작위·양수 중심·음수 중심 등 여러 데이터 생성 전략도 포함됩니다.\n\nipywidgets와 matplotlib을 이용해 선택 항목이 바뀔 때마다 결과를 다시 계산하고 화면을 갱신합니다. 알고리즘의 이론적 복잡도뿐 아니라 Python 구현에서 나타나는 실제 상수 시간, 입력 분포 영향, 측정 오차까지 관찰할 수 있는 발표용 실험 환경입니다.",
        code: `# =========================================================
# 🌌 Divide & Conquer Universe
# Maximum Subarray Space Simulator
# Colab Version
# =========================================================

# 실행 방법:
# 1. Colab에서 셀 전체 실행
# 2. 애니메이션 HTML 출력됨
# 3. Divide & Conquer / DP 비교 가능

# =========================================================

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

from matplotlib.patches import Circle
from IPython.display import HTML
from dataclasses import dataclass

# =========================================================
# 설정
# =========================================================

plt.style.use("dark_background")

# =========================================================
# 노드 클래스
# =========================================================

@dataclass
class SpaceNode:

    x: float
    y: float

    tx: float
    ty: float

    radius: float

    value: float

    depth: int

    alpha: float

    phase: str

    left: int
    right: int


# =========================================================
# 전역 상태
# =========================================================

frames = []

best_sum = float('-inf')
best_range = (0, 0)

# =========================================================
# 프레임 저장
# =========================================================

def save_frame(nodes, title):

    copied = []

    for n in nodes:

        copied.append(
            SpaceNode(
                n.x,
                n.y,
                n.tx,
                n.ty,
                n.radius,
                n.value,
                n.depth,
                n.alpha,
                n.phase,
                n.left,
                n.right
            )
        )

    frames.append((copied, title))


# =========================================================
# DP (Kadane)
# =========================================================

def dynamic_programming(arr):

    global best_sum
    global best_range

    current_sum = arr[0]
    max_sum = arr[0]

    start = end = temp = 0

    for i in range(1, len(arr)):

        if arr[i] > current_sum + arr[i]:
            current_sum = arr[i]
            temp = i
        else:
            current_sum += arr[i]

        if current_sum > max_sum:
            max_sum = current_sum
            start = temp
            end = i

    best_sum = max_sum
    best_range = (start, end)

    return max_sum


# =========================================================
# Divide & Conquer
# =========================================================

def max_crossing_sum(arr, left, mid, right):

    global best_sum
    global best_range

    left_sum = float('-inf')
    s = 0
    best_left = mid

    for i in range(mid, left - 1, -1):

        s += arr[i]

        if s > left_sum:
            left_sum = s
            best_left = i

    right_sum = float('-inf')
    s = 0
    best_right = mid + 1

    for i in range(mid + 1, right + 1):

        s += arr[i]

        if s > right_sum:
            right_sum = s
            best_right = i

    total = left_sum + right_sum

    if total > best_sum:
        best_sum = total
        best_range = (best_left, best_right)

    return total


# =========================================================
# 우주 시뮬레이션용 DnC
# =========================================================

def divide_and_conquer(
    arr,
    left,
    right,
    x,
    y,
    spread,
    depth,
    nodes
):

    size = right - left + 1

    value = np.sum(arr[left:right+1])

    node = SpaceNode(
        x=x,
        y=y,
        tx=x,
        ty=y,
        radius=max(0.25, size * 0.18),
        value=value,
        depth=depth,
        alpha=1.0,
        phase="DIVIDE",
        left=left,
        right=right
    )

    nodes.append(node)

    save_frame(nodes,
               f"DIVIDE [{left}, {right}]")

    if left == right:

        node.phase = "BASE"

        save_frame(nodes,
                   f"BASE [{left}]")

        return arr[left]

    mid = (left + right) // 2

    left_sum = divide_and_conquer(
        arr,
        left,
        mid,
        x - spread,
        y - 1.6,
        spread * 0.55,
        depth + 1,
        nodes
    )

    right_sum = divide_and_conquer(
        arr,
        mid + 1,
        right,
        x + spread,
        y - 1.6,
        spread * 0.55,
        depth + 1,
        nodes
    )

    cross_sum = max_crossing_sum(
        arr,
        left,
        mid,
        right
    )

    result = max(
        left_sum,
        right_sum,
        cross_sum
    )

    node.phase = "MERGE"

    node.value = result

    save_frame(nodes,
               f"MERGE [{left}, {right}]")

    return result


# =========================================================
# 애니메이션
# =========================================================

def animate_universe(arr, dnc_result, dp_result):

    fig, ax = plt.subplots(figsize=(15, 9))

    fig.patch.set_facecolor("#050816")

    def update(frame_idx):

        ax.clear()

        ax.set_facecolor("#050816")

        nodes, title = frames[frame_idx]

        # 별 배경
        np.random.seed(0)

        stars_x = np.random.uniform(-8, 8, 120)
        stars_y = np.random.uniform(-8, 2, 120)

        ax.scatter(
            stars_x,
            stars_y,
            s=np.random.uniform(1, 12, 120),
            alpha=0.45,
            color="white"
        )

        # 연결선
        for i in range(len(nodes)-1):

            n1 = nodes[i]

            for j in range(i+1, len(nodes)):

                n2 = nodes[j]

                dist = np.sqrt(
                    (n1.x - n2.x)**2 +
                    (n1.y - n2.y)**2
                )

                if dist < 3:

                    ax.plot(
                        [n1.x, n2.x],
                        [n1.y, n2.y],
                        alpha=0.08,
                        color="#00ffe1"
                    )

        # 노드
        for node in nodes:

            intensity = min(
                1.0,
                abs(node.value) / max(1, abs(best_sum))
            )

            # 색상
            if node.phase == "MERGE":
                color = (1.0, 0.3, intensity)

            elif node.phase == "BASE":
                color = (0.3, 0.7, 1.0)

            else:
                color = (0.0, intensity, 1.0)

            # 최적 구간 glow
            if (
                node.left == best_range[0]
                and
                node.right == best_range[1]
            ):

                glow = Circle(
                    (node.x, node.y),
                    node.radius * 2.2,
                    color="#00ffd5",
                    alpha=0.15
                )

                ax.add_patch(glow)

            # 본체
            circle = Circle(
                (node.x, node.y),
                node.radius,
                color=color,
                alpha=0.85
            )

            ax.add_patch(circle)

            ax.text(
                node.x,
                node.y,
                f"{int(node.value)}",
                color="white",
                fontsize=9,
                ha='center',
                va='center'
            )

        # HUD
        hud = (
            "🌌 DIVIDE & CONQUER UNIVERSE\\n\\n"
            f"FRAME        : {frame_idx+1}/{len(frames)}\\n"
            f"CURRENT      : {title}\\n"
            f"BEST SUM     : {best_sum}\\n"
            f"BEST RANGE   : {best_range}\\n\\n"
            f"D&C RESULT   : {dnc_result}\\n"
            f"DP RESULT    : {dp_result}\\n\\n"
            "ALGORITHMS\\n"
            "- Divide & Conquer\\n"
            "- Dynamic Programming\\n"
        )

        ax.text(
            -7.7,
            1.6,
            hud,
            fontsize=11,
            color="#00ffe1",
            family="monospace",
            verticalalignment='top',
            bbox=dict(
                facecolor="#0b1020",
                edgecolor="#00ffe1",
                alpha=0.9
            )
        )

        ax.set_xlim(-8, 8)
        ax.set_ylim(-8, 2)

        ax.set_xticks([])
        ax.set_yticks([])

        ax.set_title(
            "Recursive Space Simulator",
            fontsize=22,
            color="white",
            pad=20
        )

    ani = animation.FuncAnimation(
        fig,
        update,
        frames=len(frames),
        interval=850,
        repeat=False
    )

    plt.close()

    return HTML(ani.to_jshtml())


# =========================================================
# 실행
# =========================================================

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4, 9, 30, -99]

# DP
dp_result = dynamic_programming(arr)

# D&C
nodes = []

dnc_result = divide_and_conquer(
    arr,
    0,
    len(arr)-1,
    x=0,
    y=0,
    spread=3.6,
    depth=0,
    nodes=nodes
)

print("=" * 60)
print("🌌 RECURSIVE SPACE SIMULATOR")
print("=" * 60)

print("Array:", arr)
print("Divide & Conquer :", dnc_result)
print("Dynamic Programming :", dp_result)

print("=" * 60)

# 애니메이션 출력
animate_universe(
    arr,
    dnc_result,
    dp_result
)

# ────────────────────────────────────────────────────────────────────────

import time
import random
import matplotlib.pyplot as plt
import ipywidgets as widgets
from IPython.display import display, clear_output

# =========================================================
# Algorithms
# =========================================================

def dnc(arr, l, r):
    if l == r:
        return arr[l]

    m = (l + r) // 2

    left = dnc(arr, l, m)
    right = dnc(arr, m+1, r)

    s = 0
    left_best = float('-inf')
    for i in range(m, l-1, -1):
        s += arr[i]
        left_best = max(left_best, s)

    s = 0
    right_best = float('-inf')
    for i in range(m+1, r+1):
        s += arr[i]
        right_best = max(right_best, s)

    return max(left, right, left_best + right_best)


def kadane(arr):
    cur = best = arr[0]
    for x in arr[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best


def prefix(arr):
    p = 0
    minp = 0
    best = float('-inf')

    for x in arr:
        p += x
        best = max(best, p - minp)
        minp = min(minp, p)

    return best


algorithms = {
    "DnC": lambda a: dnc(a, 0, len(a)-1),
    "Kadane": kadane,
    "Prefix": prefix
}

# =========================================================
# Data Generator
# =========================================================

def generate(n, mode):

    if mode == "random":
        return [random.randint(-100, 100) for _ in range(n)]

    if mode == "monotonic":
        return list(range(n))

    if mode == "alternating":
        return [(-1)**i * i for i in range(n)]

    if mode == "sparse":
        arr = [0]*n
        arr[n//2] = 1000
        return arr

# =========================================================
# MODE A: 알고리즘 1개 + 여러 테스트
# =========================================================

def mode_algorithm_focus(algo_name):

    sizes = list(range(100, 1000, 100))

    modes = ["random", "monotonic", "alternating", "sparse"]

    plt.figure(figsize=(9,6))

    for mode in modes:

        times = []

        for n in sizes:

            arr = generate(n, mode)

            t0 = time.perf_counter()
            algorithms[algo_name](arr)
            times.append((time.perf_counter() - t0) * 1000)

        plt.plot(
            sizes,
            times,
            marker='o',
            label=mode
        )

    plt.title(f"{algo_name} - Input Distribution Comparison")
    plt.xlabel("Input Size")
    plt.ylabel("Time (ms)")
    plt.grid()
    plt.legend()
    plt.show()
# =========================================================
# MODE B: 테스트 1개 + 여러 알고리즘
# =========================================================

def mode_case_focus(mode, size):

    arr = generate(size, mode)

    results = {}

    for name, func in algorithms.items():

        t0 = time.perf_counter()
        func(arr)
        results[name] = (time.perf_counter() - t0)*1000

    plt.figure(figsize=(8,5))
    plt.bar(results.keys(), results.values())
    plt.title(f"Algorithm comparison (mode={mode}, size={size})")
    plt.ylabel("Time (ms)")
    plt.grid(axis="y")
    plt.show()

# =========================================================
# UI
# =========================================================

mode_select = widgets.ToggleButtons(
    options=["Algorithm Focus", "Case Focus"]
)

algo_select = widgets.Dropdown(
    options=["DnC", "Kadane", "Prefix"],
    value="Kadane"
)

data_mode = widgets.Dropdown(
    options=["random", "monotonic", "alternating", "sparse"],
    value="random"
)

size_slider = widgets.IntSlider(
    value=300,
    min=50,
    max=1500,
    step=50
)

out = widgets.Output()

def update(change):

    with out:
        clear_output(wait=True)

        if mode_select.value == "Algorithm Focus":
            mode_algorithm_focus(
                algo_select.value
            )

        else:
            mode_case_focus(
                data_mode.value,
                size_slider.value
            )

display(mode_select, algo_select, data_mode, size_slider, out)

for w in [mode_select, algo_select, data_mode, size_slider]:
    w.observe(update, names="value")

update(None)

# ────────────────────────────────────────────────────────────────────────

import time
import random
import numpy as np
import matplotlib.pyplot as plt

from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

import ipywidgets as widgets
from IPython.display import display, clear_output

# ────────────────────────────────────────────────────────────────────────

def divide_and_conquer(arr, left, right):
    """
    Divide & Conquer 최대 부분합 알고리즘

    핵심 아이디어:
    - 배열을 반으로 나눔 (Divide)
    - 각각 재귀적으로 해결 (Conquer)
    - 중간을 걸치는 구간 계산 (Combine)

    시간복잡도:
    T(n) = 2T(n/2) + O(n)
    → O(n log n)
    """

    # base case: 원소 1개면 자기 자신이 최대
    if left == right:
        return arr[left]

    mid = (left + right) // 2

    # 1. 왼쪽 구간 최대합
    left_max = divide_and_conquer(arr, left, mid)

    # 2. 오른쪽 구간 최대합
    right_max = divide_and_conquer(arr, mid + 1, right)

    # 3. 중간을 걸치는 경우 계산
    # (mid 기준 왼쪽으로 확장)
    s = 0
    left_sum = float('-inf')
    for i in range(mid, left - 1, -1):
        s += arr[i]
        left_sum = max(left_sum, s)

    # (mid+1 기준 오른쪽으로 확장)
    s = 0
    right_sum = float('-inf')
    for i in range(mid + 1, right + 1):
        s += arr[i]
        right_sum = max(right_sum, s)

    # 4. 3가지 중 최대 반환
    return max(left_max, right_max, left_sum + right_sum)

# ────────────────────────────────────────────────────────────────────────

def kadane(arr):
    """
    Dynamic Programming (Kadane Algorithm)

    핵심 아이디어:
    - 이전 상태(cur)를 기억
    - 현재 원소 포함 vs 새로 시작 비교

    상태 정의:
    cur[i] = i에서 끝나는 최대 부분합

    점화식:
    cur = max(x, cur + x)

    시간복잡도:
    O(n)
    """

    cur = best = arr[0]

    for x in arr[1:]:
        # 현재 원소를 포함하는 경우 vs 새로 시작
        cur = max(x, cur + x)

        # 전체 최댓값 갱신
        best = max(best, cur)

    return best

# ────────────────────────────────────────────────────────────────────────

def prefix_trick(arr):
    """
    Prefix Sum 기반 최적화 기법

    핵심 아이디어:
    - 누적합(prefix)을 이용
    - 구간합 = prefix[j] - prefix[i]

    최대 부분합 변환:
    max(prefix[j] - min(prefix[i]))

    시간복잡도:
    O(n)

    특징:
    - DP라기보다 '수학적 변환'
    - 상태 저장 없이 해결 가능
    """

    prefix = 0        # 현재까지 누적합
    min_prefix = 0    # 이전 prefix 중 최소값
    best = float('-inf')

    for x in arr:
        prefix += x

        # 현재 위치까지 최대 구간합
        best = max(best, prefix - min_prefix)

        # 최소 prefix 갱신
        min_prefix = min(min_prefix, prefix)

    return best

# ────────────────────────────────────────────────────────────────────────

def generate(n, mode="random"):

    if mode == "random":
        return [random.randint(-100, 100) for _ in range(n)]

    if mode == "monotonic":
        return list(range(n))

    if mode == "alternating":
        return [(-1)**i * i for i in range(n)]

    if mode == "sparse":
        arr = [0]*n
        arr[n//2] = 1000
        return arr

# ────────────────────────────────────────────────────────────────────────

def mode_A(algo_name, mode):

    sizes = list(range(100, 1200, 100))

    X = []
    y = []

    for n in sizes:
        arr = generate(n, mode)

        start = time.perf_counter()
        algos[algo_name](arr)
        end = time.perf_counter()

        X.append(n)
        y.append((end-start)*1000)

    X = np.array(X).reshape(-1,1)
    y = np.array(y)

    # ---------------------------
    # regression models
    # ---------------------------

    lin = LinearRegression()
    lin.fit(X, y)

    quad = make_pipeline(PolynomialFeatures(2), LinearRegression())
    quad.fit(X, y)

    # n log n model
    X_log = X * np.log2(X)
    log_model = LinearRegression()
    log_model.fit(X_log, y)

    # ---------------------------
    # PLOT (real data + models)
    # ---------------------------

    plt.figure(figsize=(10,6))

    # 🔴 REAL DATA (이게 핵심)
    plt.scatter(X, y, color="white", label="Real Data")

    # 📉 linear fit
    plt.plot(X, lin.predict(X), label="O(n) fit")

    # 📉 quadratic fit
    plt.plot(X, quad.predict(X), label="O(n^2) fit")

    # 📉 n log n fit
    plt.plot(X, log_model.predict(X_log), label="O(n log n) fit")

    plt.title(f"[MODE A] {algo_name} performance ({mode})")
    plt.xlabel("Input size")
    plt.ylabel("Time (ms)")
    plt.grid()
    plt.legend()
    plt.show()

# ────────────────────────────────────────────────────────────────────────

def mode_B(mode, size):

    arr = generate(size, mode)

    results = {}

    for name, f in algos.items():

        start = time.perf_counter()
        f(arr)
        results[name] = (time.perf_counter()-start)*1000

    plt.figure(figsize=(8,5))

    plt.bar(results.keys(), results.values())

    plt.title(f"[MODE B] Algorithm comparison ({mode}, n={size})")
    plt.ylabel("Time (ms)")
    plt.grid(axis="y")

    plt.show()

# ────────────────────────────────────────────────────────────────────────

mode_select = widgets.ToggleButtons(
    options=["Mode A (Algorithm Focus)", "Mode B (Case Focus)"]
)

algo_select = widgets.Dropdown(
    options=list(algos.keys()),
    value="Kadane"
)

data_mode = widgets.Dropdown(
    options=["random", "monotonic", "alternating", "sparse"],
    value="random"
)

size_slider = widgets.IntSlider(
    value=400,
    min=100,
    max=1500,
    step=100
)

out = widgets.Output()

# ────────────────────────────────────────────────────────────────────────

def update(change):

    with out:
        clear_output(wait=True)

        if mode_select.value == "Mode A (Algorithm Focus)":
            mode_A(algo_select.value, data_mode.value)

        else:
            mode_B(data_mode.value, size_slider.value)

# ────────────────────────────────────────────────────────────────────────

for w in [mode_select, algo_select, data_mode, size_slider]:
    w.observe(update, names="value")

display(mode_select, algo_select, data_mode, size_slider, out)

update(None)`
    },
    {
        id: 34,
        title: "최대 부분 배열 기본 구현과 검증",
        subject: "동적계획법 발표",
        category: "DP",
        file: "8차시_DP_발표(1).ipynb",
        description: "최대 부분 배열 합을 분할정복과 Kadane 알고리즘으로 구현하고 다수의 테스트 케이스로 검증하는 기본 코드 묶음입니다.\n\n분할정복은 중앙을 가로지르는 최댓값을 별도 함수로 계산하며, Kadane 알고리즘은 한 번의 순회로 현재 최적값과 전체 최적값을 갱신합니다. 사용자 입력 파싱과 빈 배열 예외 처리도 포함되어 있어 독립 실행이 가능합니다.\n\n단일 원소, 모두 음수, 모두 양수, 0 포함, 최대 구간이 앞·중간·뒤에 있는 경우, 큰 정수 등 다양한 검증 데이터가 준비되어 있습니다. 두 구현이 항상 동일한 값을 반환하는지와 실행 시간이 어떻게 다른지 확인할 수 있어 알고리즘 정확성과 시간 복잡도를 동시에 설명하기 적합합니다.",
        code: `# ── 방법 1: 분할정복 ──────────────────────────────────────────

def max_crossing_sum(arr, left, mid, right):
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

    # 두 합이 모두 유효할 때만 합산 (방어 코드)
    if left_sum == float('-inf') or right_sum == float('-inf'):
        return float('-inf')
    return left_sum + right_sum


def divide_and_conquer(arr, left, right):
    # 빈 배열 방어
    if not arr:
        raise ValueError("배열이 비어 있습니다.")

    if left == right:
        return arr[left]

    mid = (left + right) // 2
    left_max  = divide_and_conquer(arr, left, mid)
    right_max = divide_and_conquer(arr, mid + 1, right)
    cross_max = max_crossing_sum(arr, left, mid, right)

    return max(left_max, right_max, cross_max)


arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(divide_and_conquer(arr, 0, len(arr) - 1))  # 6

# ────────────────────────────────────────────────────────────────────────

# 사용자 입력
user_input = input("배열을 입력하세요 (예: -2,1,-3,4,-1,2,1,-5,4): ")

try:
    arr = list(map(int, user_input.split(',')))
    if not arr:
        raise ValueError("배열이 비어 있습니다.")
except ValueError as e:
    print(f"입력 오류: {e}")
    exit()

print(divide_and_conquer(arr, 0, len(arr) - 1))  # 6

# ────────────────────────────────────────────────────────────────────────


# ── 방법 2: 동적계획법 (Kadane's Algorithm) ───────────────────

def dynamic_programming(arr):
    # 빈 배열 방어
    if not arr:
        raise ValueError("배열이 비어 있습니다.")

    max_sum     = arr[0]   # 전체 최댓값
    current_sum = arr[0]   # 현재까지의 서브배열 합

    for i in range(1, len(arr)):
        # 현재 원소만 취하는 게 나은지, 이어가는 게 나은지 선택
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum     = max(max_sum, current_sum)

    return max_sum


arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(dynamic_programming(arr))  # 6

# ────────────────────────────────────────────────────────────────────────

# 사용자 입력
user_input = input("배열을 입력하세요 (예: -2,1,-3,4,-1,2,1,-5,4): ")

try:
    arr = list(map(int, user_input.split(',')))
    if not arr:
        raise ValueError("배열이 비어 있습니다.")
except ValueError as e:
    print(f"입력 오류: {e}")
    exit()

print(dynamic_programming(arr))

# ────────────────────────────────────────────────────────────────────────

import time

# ── 테스트 케이스 ─────────────────────────────────────────────
test_cases = [
    # (입력 배열, 기댓값, 설명, 카테고리)

    # 기본
    ([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6,   "기본 예제",            "기본"),

    # 원소 개수 경계
    ([5],                               5,   "원소 1개 (양수)",       "경계"),
    ([-5],                             -5,   "원소 1개 (음수)",       "경계"),
    ([0],                               0,   "원소 1개 (0)",          "경계"),
    ([1, 2],                            3,   "원소 2개",              "경계"),

    # 부호
    ([-1, -2, -3, -4],                 -1,   "전부 음수",             "부호"),
    ([1, 2, 3, 4, 5],                  15,   "전부 양수",             "부호"),
    ([0, 0, 0, 0],                      0,   "전부 0",               "부호"),

    # 위치
    ([5, -9, -9, -9],                   5,   "최대 구간이 맨 앞",      "위치"),
    ([-9, -9, -9, 5],                   5,   "최대 구간이 맨 뒤",      "위치"),
    ([-3, 4, 6, -2, -9],               10,   "최대 구간이 중간",       "위치"),
    ([100, -1, -1, 100],              198,   "양 끝이 큰 경우",        "위치"),

    # 특수
    ([0, -1, 0, -1, 0],                 0,   "0과 음수 혼합",          "특수"),
    ([-1, 0, -1, 0, -1],               0,   "음수와 0 혼합",          "특수"),
    ([1, -1, 1, -1, 1],                1,   "양음 반복",              "특수"),
    (list(range(-50, 51)),           1275,   "범위 배열 (-50 ~ 50)",   "특수"),
    ([10**6, -1, 10**6],          1999999,   "큰 수 포함",             "특수"),
]

# ── 테스트 실행 ───────────────────────────────────────────────
def run_tests():
    categories = sorted(set(c for _, _, _, c in test_cases))

    total_dc_pass = 0
    total_dp_pass = 0

    for cat in categories:
        cases = [(a, e, d) for a, e, d, c in test_cases if c == cat]

        print(f"\\n{'━' * 65}")
        print(f"  📂 [{cat}] 테스트 ({len(cases)}개)")
        print(f"{'━' * 65}")
        print(f"  {'#':<3} {'설명':<22} {'DC결과':<10} {'DP결과':<10} {'기댓값':<10} {'DC시간':>8} {'DP시간':>8}  판정")
        print(f"  {'-' * 62}")

        for i, (arr, expected, desc) in enumerate(cases, 1):
            # 분할정복 실행 + 시간 측정
            t0 = time.perf_counter()
            dc_result = divide_and_conquer(arr, 0, len(arr) - 1)
            dc_time = (time.perf_counter() - t0) * 1000  # ms

            # 동적계획법 실행 + 시간 측정
            t0 = time.perf_counter()
            dp_result = dynamic_programming(arr)
            dp_time = (time.perf_counter() - t0) * 1000  # ms

            dc_ok = dc_result == expected
            dp_ok = dp_result == expected
            if dc_ok: total_dc_pass += 1
            if dp_ok: total_dp_pass += 1

            판정 = "✅✅" if dc_ok and dp_ok else ("✅❌" if dc_ok else ("❌✅" if dp_ok else "❌❌"))

            print(f"  {i:<3} {desc:<22} {str(dc_result):<10} {str(dp_result):<10} {str(expected):<10} {dc_time:>6.3f}ms {dp_time:>6.3f}ms  {판정}")

    # ── 최종 요약 ─────────────────────────────────────────────
    total = len(test_cases)
    print(f"\\n{'═' * 65}")
    print(f"  📊 최종 결과")
    print(f"{'═' * 65}")
    print(f"  분할정복  : {total_dc_pass}/{total} 통과 {'✅ ALL PASS' if total_dc_pass == total else '❌ 일부 실패'}")
    print(f"  동적계획법: {total_dp_pass}/{total} 통과 {'✅ ALL PASS' if total_dp_pass == total else '❌ 일부 실패'}")
    print(f"{'═' * 65}")

run_tests()`
    },
    {
        id: 35,
        title: "DnC·Kadane·Prefix 성능 벤치마크",
        subject: "동적계획법 발표",
        category: "성능 분석",
        file: "8차시_DP_발표(1).ipynb",
        description: "최대 부분 배열 문제의 세 가지 해결법을 입력 크기별로 반복 측정하고 이론적 성장 곡선과 비교하는 벤치마크 코드입니다.\n\n분할정복 O(n log n), Kadane O(n), 누적합 기반 구현의 실행 시간을 동일한 데이터 조건에서 측정합니다. 입력 크기와 데이터 생성 모드를 변경할 수 있으며, 측정값을 n, n log n, n² 등의 이론 곡선에 맞춰 비교하여 어떤 복잡도 모델이 실제 결과를 가장 잘 설명하는지 확인합니다.\n\n대화형 위젯을 통해 단일 알고리즘의 크기별 변화와 동일 입력에서 여러 알고리즘의 차이를 선택적으로 볼 수 있습니다. 반복 측정, 그래프 축 조정, 입력 분포 제어가 포함되어 있어 단순한 한 번의 시간 측정보다 신뢰도 높은 성능 분석을 수행하도록 설계되었습니다.",
        code: `import time
import random
import numpy as np
import matplotlib.pyplot as plt

import ipywidgets as widgets
from IPython.display import display, clear_output

from sklearn.linear_model import LinearRegression

from sklearn.preprocessing import StandardScaler

# ────────────────────────────────────────────────────────────────────────

def dnc(arr, l, r):
    """
    Divide & Conquer Maximum Subarray Sum

    시간복잡도:
        T(n) = 2T(n/2) + O(n)
        → O(n log n)

    핵심:
        1. 왼쪽 최대
        2. 오른쪽 최대
        3. 중앙 crossing 최대
    """

    # base case: 원소 1개
    if l == r:
        return arr[l]

    mid = (l + r) // 2

    # 재귀적으로 좌/우 계산
    left = dnc(arr, l, mid)
    right = dnc(arr, mid+1, r)

    # --------------------------
    # crossing sum 계산
    # --------------------------

    # 왼쪽 확장
    s = 0
    left_best = float('-inf')
    for i in range(mid, l-1, -1):
        s += arr[i]
        left_best = max(left_best, s)

    # 오른쪽 확장
    s = 0
    right_best = float('-inf')
    for i in range(mid+1, r+1):
        s += arr[i]
        right_best = max(right_best, s)

    return max(left, right, left_best + right_best)

# ────────────────────────────────────────────────────────────────────────

def kadane(arr):
    """
    Dynamic Programming (Kadane Algorithm)

    상태 정의:
        cur[i] = i에서 끝나는 최대 부분합

    점화식:
        cur = max(x, cur + x)

    시간복잡도:
        O(n)
    """

    cur = best = arr[0]

    for x in arr[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)

    return best

# ────────────────────────────────────────────────────────────────────────

def prefix(arr):
    """
    Prefix Sum 기반 최적화 기법

    핵심 아이디어:
    - 누적합(prefix)을 이용
    - 구간합 = prefix[j] - prefix[i]

    최대 부분합 변환:
    max(prefix[j] - min(prefix[i]))

    시간복잡도:
    O(n)

    특징:
    - DP라기보다 '수학적 변환'
    - 상태 저장 없이 해결 가능
    """

    prefix = 0        # 현재까지 누적합
    min_prefix = 0    # 이전 prefix 중 최소값
    best = float('-inf')

    for x in arr:
        prefix += x

        # 현재 위치까지 최대 구간합
        best = max(best, prefix - min_prefix)

        # 최소 prefix 갱신
        min_prefix = min(min_prefix, prefix)

    return best

# ────────────────────────────────────────────────────────────────────────

algos = {
    "DnC": lambda a: dnc(a, 0, len(a)-1),
    "Kadane": kadane,
    "Prefix": prefix
}

# ────────────────────────────────────────────────────────────────────────

def generate(n, mode):
    """
    다양한 입력 분포 생성

    mode에 따라 알고리즘 성능이 달라짐
    (이게 이 프로젝트의 핵심 포인트)
    """

    if mode == "random":
        return [random.randint(-100, 100) for _ in range(n)]

    if mode == "monotonic":
        return list(range(n))

    if mode == "alternating":
        return [(-1)**i * i for i in range(n)]

    if mode == "sparse":
        arr = [0]*n
        arr[n//2] = 1000
        return arr

# ────────────────────────────────────────────────────────────────────────

def theory_curves(X):
    """
    📌 Big-O theoretical baseline curves

    - O(n)
    - O(n log n)
    - O(n^2)
    """

    X = X.reshape(-1)

    return {
        "O(n)": X,
        "O(n log n)": X * np.log2(X + 1),
        "O(n^2)": X ** 2
    }

# ────────────────────────────────────────────────────────────────────────

def mode_A(algo_name, mode, max_n):

    max_n = int(max_n)

    if max_n < 100:
        print("max_n must be >= 100")
        return

    # -----------------------------
    # STEP 자동 조정 (핵심)
    # -----------------------------
    step = max(100, max_n // 10)

    sizes = np.arange(100, max_n + 1, step)

    # -----------------------------
    # 강제 보정 (n=100일 때 최소 1개 보장)
    # -----------------------------
    if len(sizes) == 0:
        sizes = np.array([100])

    if sizes[-1] != max_n:
        sizes = np.append(sizes, max_n)

    real_times = []

    # --------------------------
    # warm-up (JIT-like effect 제거)
    # --------------------------
    algos[algo_name](generate(200, mode))

    # --------------------------
    # stable measurement
    # --------------------------
    def measure(func, arr, repeat=30):
        total = 0
        for _ in range(repeat):
            start = time.perf_counter()
            func(arr)
            end = time.perf_counter()
            total += (end - start)
        return (total / repeat) * 1000

    for n in sizes:
        arr = generate(n, mode)
        real_times.append(measure(algos[algo_name], arr))

    real_times = np.array(real_times)

    # --------------------------
    # theory curves
    # --------------------------
    theory = {
        "O(n)": sizes,
        "O(n log n)": sizes * np.log2(sizes + 1)
    }

    # --------------------------
    # ML (stable regression)
    # --------------------------
    X_feat = np.column_stack([
        sizes,
        sizes * np.log2(sizes + 1)
    ])

    model = LinearRegression()
    model.fit(X_feat, real_times)

    ml_pred = model.predict(X_feat)

    # --------------------------
    # plot (NO scaling)
    # --------------------------
    def normalize(curve, real):
      """
      shape 비교용 정규화 (scale 제거)
      """
      curve = np.array(curve)
      return curve / np.max(curve) * np.max(real)

      for name, curve in theory.items():
          plt.plot(
              sizes,
              normalize_to_real(curve, real_times),
              label=name
          )

    plt.figure(figsize=(12, 12))

    # =========================
    # 1. RAW SCALE (절대 시간)
    # =========================
    plt.subplot(3, 1, 1)

    plt.scatter(sizes, real_times, color="black", label="Real Data")

    plt.plot(sizes, theory["O(n)"], label="O(n)")
    plt.plot(sizes, theory["O(n log n)"], label="O(n log n)")
    plt.plot(sizes, ml_pred, "--", label="ML Fit")

    plt.title("1. Raw Scale (Absolute Time)")
    plt.ylabel("ms")
    plt.grid()
    plt.legend()

    # =========================
    # 2. NORMALIZED SCALE (shape 비교)
    # =========================
    plt.subplot(3, 1, 2)

    plt.scatter(sizes, real_times, color="black", label="Real Data")

    plt.plot(sizes, normalize(theory["O(n)"], real_times), label="O(n)")
    plt.plot(sizes, normalize(theory["O(n log n)"], real_times), label="O(n log n)")
    plt.plot(sizes, normalize(ml_pred, real_times), "--", label="ML Fit")

    plt.title("2. Normalized Scale (Shape Comparison)")
    plt.ylabel("scaled")
    plt.grid()
    plt.legend()

    # =========================
    # 3. LOG SCALE (growth rate)
    # =========================
    plt.subplot(3, 1, 3)

    plt.scatter(sizes, real_times, color="black", label="Real Data")

    plt.plot(sizes, theory["O(n)"], label="O(n)")
    plt.plot(sizes, theory["O(n log n)"], label="O(n log n)")
    plt.plot(sizes, ml_pred, "--", label="ML Fit")

    plt.yscale("log")

    plt.title("3. Log Scale (Growth Rate)")
    plt.xlabel("Input size (n)")
    plt.ylabel("log(ms)")
    plt.grid()
    plt.legend()

    plt.tight_layout()
    plt.show()

    print("real_times:", real_times)

# ────────────────────────────────────────────────────────────────────────

def mode_B(mode, size):

    arr = generate(size, mode)

    results = {}

    for name, f in algos.items():

        start = time.perf_counter()
        f(arr)
        results[name] = (time.perf_counter()-start)*1000

    plt.figure(figsize=(8,5))

    plt.bar(results.keys(), results.values())

    plt.title(f"[MODE B] Algorithm Comparison (n={size})")
    plt.ylabel("Time (ms)")
    plt.grid(axis="y")

    plt.show()

# ────────────────────────────────────────────────────────────────────────

mode_select = widgets.ToggleButtons(
    options=["Mode A", "Mode B"]
)

algo_select = widgets.Dropdown(
    options=list(algos.keys()),
    value="Kadane"
)

data_mode = widgets.Dropdown(
    options=["random", "monotonic", "alternating", "sparse"],
    value="random"
)

size_slider = widgets.IntSlider(
    value=400,
    min=100,
    max=1500,
    step=1
)

out = widgets.Output()

# ────────────────────────────────────────────────────────────────────────

def update(change):

    with out:
        clear_output(wait=True)

        if mode_select.value == "Mode A":
            mode_A(
                algo_select.value,
                data_mode.value,
                size_slider.value
            )

        else:
            mode_B(
                data_mode.value,
                size_slider.value
            )

# ────────────────────────────────────────────────────────────────────────

for w in [mode_select, algo_select, data_mode, size_slider]:
    w.observe(update, names="value")

display(mode_select, algo_select, data_mode, size_slider, out)

update(None)`
    },
    {
        id: 36,
        title: "이진 탐색 기반 LIS 길이 계산",
        subject: "동적계획법 발표",
        category: "DP",
        file: "8차시_DP_발표(1).ipynb",
        description: "가장 긴 증가하는 부분 수열(LIS)의 길이를 이진 탐색으로 O(n log n)에 계산하고 과정을 시각적으로 설명하는 코드입니다.\n\ntails 배열의 i번째 원소는 길이가 i+1인 증가 부분 수열이 가질 수 있는 가장 작은 마지막 값을 의미합니다. 새 값이 tails의 마지막 값보다 크면 뒤에 추가하고, 그렇지 않으면 bisect_left로 처음 이상인 위치를 찾아 교체합니다. 이 교체는 실제 LIS를 그대로 저장하는 것은 아니지만, 더 작은 꼬리값을 유지해 이후 원소가 연결될 가능성을 높입니다.\n\n각 단계에서 tails가 어떻게 변하는지 출력하거나 그래프로 표시하는 기능과 테스트 예제가 포함되어 있습니다. 길이만 구할 때는 O(n log n), O(n) 공간을 사용하며, 실제 수열까지 복원하려면 이전 인덱스와 원소 위치를 추가로 기록해야 합니다.",
        code: `from bisect import bisect_left


def minimum_move_sort(arr):
    """
    최소 이동 정렬 분석 함수

    목표:
    - 배열에서 LIS(Longest Increasing Subsequence)를 찾는다.
    - LIS에 포함되지 않은 원소만 이동하면
      전체 배열을 정렬할 수 있다.

    핵심 원리:
    최소 이동 횟수 = 전체 길이 - LIS 길이

    시간복잡도:
    O(n log n)
    """

    # 배열 길이
    n = len(arr)

    # -----------------------------
    # tails:
    # tails[i] =
    # 길이가 i+1인 증가 부분수열 중
    # "가장 작은 마지막 값"
    #
    # 예:
    # tails = [1, 3, 7]
    #
    # 의미:
    # 길이 1 증가수열 마지막 최소값 = 1
    # 길이 2 증가수열 마지막 최소값 = 3
    # 길이 3 증가수열 마지막 최소값 = 7
    # -----------------------------
    tails = []

    # -----------------------------
    # tails_idx:
    # tails 값이 실제 배열의 어느 인덱스인지 저장
    #
    # LIS 복원을 위해 필요
    # -----------------------------
    tails_idx = []

    # -----------------------------
    # parent[i]:
    # arr[i] 이전에 연결되는 LIS 원소 위치
    #
    # LIS를 역추적하기 위해 사용
    # -----------------------------
    parent = [-1] * n

    # =============================
    # LIS 계산 시작
    # =============================
    for i, x in enumerate(arr):

        # ---------------------------------
        # x가 들어갈 위치를 binary search
        #
        # 예:
        # tails = [1,2,5]
        # x = 4
        #
        # 들어갈 위치:
        # pos = 2
        #
        # 결과:
        # tails = [1,2,4]
        # ---------------------------------
        pos = bisect_left(tails, x)

        # ---------------------------------
        # pos가 tails 끝이면
        # 새로운 LIS 길이 증가
        # ---------------------------------
        if pos == len(tails):
            tails.append(x)
            tails_idx.append(i)

        # ---------------------------------
        # 기존 값을 더 작은 값으로 교체
        #
        # 더 작은 끝값이 이후 확장에 유리
        # ---------------------------------
        else:
            tails[pos] = x
            tails_idx[pos] = i

        # ---------------------------------
        # parent 연결
        #
        # pos > 0 이면
        # 현재 원소 앞에는
        # 길이 pos인 LIS가 존재
        #
        # 그 마지막 원소를 연결
        # ---------------------------------
        if pos > 0:
            parent[i] = tails_idx[pos - 1]

    # =============================
    # LIS 복원
    # =============================

    lis = []

    # LIS 마지막 원소 인덱스
    cur = tails_idx[-1]

    # parent를 따라 역추적
    while cur != -1:
        lis.append(arr[cur])
        cur = parent[cur]

    # 뒤집어서 정상 순서로
    lis.reverse()

    # 최소 이동 횟수
    moves = n - len(lis)

    return lis, moves


# ==========================================
# 실행 코드
# ==========================================

arr = [3, 1, 2, 5, 4]

print("원본 배열:")
print(arr)

lis, moves = minimum_move_sort(arr)

print("\\nLIS (이동하지 않아도 되는 원소들):")
print(lis)

print("\\n최소 이동 횟수:")
print(moves)`
    },
    {
        id: 37,
        title: "4×4 스도쿠 백트래킹과 입력 검증",
        subject: "백트래킹",
        category: "백트래킹",
        file: "9차시_Backtracking_1조_발표_자료 (2)(1).ipynb",
        description: "4×4 스도쿠의 빈칸을 재귀적으로 채우고, 잘못된 입력과 해답이 없는 경우까지 판별하는 백트래킹 풀이입니다.\n\nfind_empty가 아직 채워지지 않은 칸을 찾고, is_safe가 같은 행·열·2×2 박스에 동일한 숫자가 없는지 검사합니다. 가능한 숫자를 임시로 배치한 뒤 재귀 호출이 실패하면 다시 0으로 되돌리는 과정이 백트래킹의 핵심입니다. 모든 칸이 채워지면 True를 반환해 재귀 호출을 연쇄적으로 종료합니다.\n\n확장 버전에는 보드 크기, 값 범위, 초기 배치 충돌을 검사하는 검증 함수와 원본 보드를 보존하기 위한 복사, 정상·오류·해답 없음 테스트가 포함되어 있습니다. 일반화된 스도쿠는 지수 시간 복잡도를 가질 수 있지만, 제약 검사를 통해 탐색 공간을 크게 줄입니다.",
        code: `# ==========================
# 4×4 Sudoku Solver
# Backtracking
# ==========================

def print_board(board):
    """스도쿠 판 출력"""
    for row in board:
        print(row)


def is_safe(board, row, col, num):
    """
    (row, col)에 num을 놓아도 되는지 검사

    검사 조건
    1. 같은 행에 num이 없는가?
    2. 같은 열에 num이 없는가?
    3. 같은 2×2 박스에 num이 없는가?
    """

    # 1. 행 검사
    for x in range(4):
        if board[row][x] == num:
            return False

    # 2. 열 검사
    for x in range(4):
        if board[x][col] == num:
            return False

    # 3. 2×2 박스 검사
    start_row = row - row % 2
    start_col = col - col % 2

    for r in range(start_row, start_row + 2):
        for c in range(start_col, start_col + 2):
            if board[r][c] == num:
                return False

    return True


def find_empty(board):
    """
    빈 칸(0)을 찾는다.
    찾으면 (row, col) 반환
    없으면 None 반환
    """
    for row in range(4):
        for col in range(4):
            if board[row][col] == 0:
                return row, col

    return None


def solve_sudoku(board):
    """
    백트래킹으로 스도쿠 해결
    """

    empty = find_empty(board)

    # 빈 칸이 없으면 해결 완료
    if empty is None:
        return True

    row, col = empty

    # 1~4까지 시도
    for num in range(1, 5):

        if is_safe(board, row, col, num):

            # 숫자 배치
            board[row][col] = num

            # 다음 단계 진행
            if solve_sudoku(board):
                return True

            # =====================
            # 백트래킹 발생 지점
            # 현재 선택이 실패했으므로
            # 원래 상태로 되돌린다.
            # =====================
            board[row][col] = 0

    return False


# ==========================
# 예제 입력
# ==========================

board = [
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 2, 0],
    [3, 0, 0, 0]
]

print("입력 스도쿠")
print_board(board)

print("\\n해결 중...\\n")

if solve_sudoku(board):
    print("해결 완료!")
    print_board(board)
else:
    print("해답이 존재하지 않습니다.")

# ────────────────────────────────────────────────────────────────────────

board = []

for i in range(4):
  row = list(map(int, input().split()))
  board.append(row)


print("입력 스도쿠")
print_board(board)

print("\\n해결 중...\\n")

if solve_sudoku(board):
    print("해결 완료!")
    print_board(board)
else:
    print("해답이 존재하지 않습니다.")

# ────────────────────────────────────────────────────────────────────────

# ==========================
# 4×4 Sudoku Solver
# Backtracking + Validation
# ==========================

import copy


def print_board(board):
    """스도쿠 판 출력"""
    for row in board:
        print(row)

def is_valid_board(board):
    """
    board가 올바른 4×4 형식인지 검사
    - 행이 정확히 4개인가?
    - 각 행이 정확히 4개의 열을 가지는가?
    - 모든 값이 정수이며 0~4 사이인가?
    """
    if not isinstance(board, list) or len(board) != 4:
        print("[오류] board는 4개의 행을 가진 리스트여야 합니다.")
        return False
    for i, row in enumerate(board):
        if not isinstance(row, list) or len(row) != 4:
            print(f"[오류] {i}번째 행은 4개의 열을 가진 리스트여야 합니다.")
            return False
        for j, val in enumerate(row):
            if not isinstance(val, int) or val < 0 or val > 4:
                print(f"[오류] ({i}, {j}) 위치의 값 '{val}'은 0~4 사이의 정수여야 합니다.")
                return False
    return True

def is_initial_board_valid(board):
    """
    초기 배치에서 규칙 위반(충돌) 여부를 검사
    - 자기 자신을 제외하고 is_safe로 확인
    """
    for row in range(4):
        for col in range(4):
            num = board[row][col]
            if num == 0:
                continue
            # 자기 자신을 잠시 0으로 만들어 충돌 검사
            board[row][col] = 0
            if not is_safe(board, row, col, num):
                board[row][col] = num
                print(f"[오류] 초기 배치에서 충돌 발생: ({row}, {col}) 위치의 값 {num}")
                return False
            board[row][col] = num
    return True

def is_safe(board, row, col, num):
    """
    (row, col)에 num을 놓아도 되는지 검사
    검사 조건
    1. 같은 행에 num이 없는가?
    2. 같은 열에 num이 없는가?
    3. 같은 2×2 박스에 num이 없는가?
    """
    # 1. 행 검사
    for x in range(4):
        if board[row][x] == num:
            return False
    # 2. 열 검사
    for x in range(4):
        if board[x][col] == num:
            return False
    # 3. 2×2 박스 검사
    start_row = row - row % 2
    start_col = col - col % 2
    for r in range(start_row, start_row + 2):
        for c in range(start_col, start_col + 2):
            if board[r][c] == num:
                return False
    return True


def find_empty(board):
    """
    빈 칸(0)을 찾는다.
    찾으면 (row, col) 반환
    없으면 None 반환
    """
    for row in range(4):
        for col in range(4):
            if board[row][col] == 0:
                return row, col
    return None


def solve_sudoku(board):
    """
    백트래킹으로 스도쿠 해결
    """
    empty = find_empty(board)
    # 빈 칸이 없으면 해결 완료
    if empty is None:
        return True

    row, col = empty

    # 1~4까지 시도
    for num in range(1, 5):
        if is_safe(board, row, col, num):
            # 숫자 배치
            board[row][col] = num
            # 다음 단계 진행
            if solve_sudoku(board):
                return True
            # =====================
            # 백트래킹 발생 지점
            # 현재 선택이 실패했으므로
            # 원래 상태로 되돌린다.
            # =====================
            board[row][col] = 0

    return False

def run_solver(board):
    """
    유효성 검사 → 원본 보존 → 풀이 순서로 실행
    """

    # 1. 형식 유효성 검사
    if not is_valid_board(board):
        print("유효하지 않은 board입니다. 프로그램을 종료합니다.")
        return

    # 2. 초기 배치 충돌 검사
    if not is_initial_board_valid(board):
        print("초기 배치에 충돌이 있습니다. 프로그램을 종료합니다.")
        return

    # [추가] 3. 원본 보존 (deepcopy)
    original = copy.deepcopy(board)
    working = copy.deepcopy(board)

    print("입력 스도쿠")
    print_board(original)
    print("\\n해결 중...\\n")

    # 4. 풀이
    if solve_sudoku(working):
        print("해결 완료!")
        print_board(working)
    else:
        print("해답이 존재하지 않습니다.")

# ────────────────────────────────────────────────────────────────────────



# --- 정상 케이스 ---
print("=== [정상] 일반 풀이 ===")
board = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 2, 0],
  [3, 0, 0, 0]
]
run_solver(board)

print()

# --- 오류 케이스 1: 크기 오류 ---
print("=== [오류] 3×4 board (형식 오류) ===")
bad_board_size = [
  [0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 2, 0],
  [3, 0, 0, 0]
]
run_solver(bad_board_size)

print()

# --- 오류 케이스 2: 값 범위 오류 ---
print("=== [오류] 값 범위 초과 (5 포함) ===")
bad_board_value = [
  [0, 0, 0, 1],
  [0, 5, 0, 0],
  [0, 0, 2, 0],
  [3, 0, 0, 0]
]
run_solver(bad_board_value)

print()

# --- 오류 케이스 3: 초기 배치 충돌 ---
print("=== [오류] 같은 행에 1이 두 번 (초기 충돌) ===")
bad_board_conflict = [
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [3, 0, 0, 0]
]
run_solver(bad_board_conflict)`
    },
    {
        id: 38,
        title: "배열 기반 최소 힙 직접 구현",
        subject: "자료구조",
        category: "자료구조",
        file: "Queue.ipynb",
        description: "완전 이진 트리 구조를 리스트에 저장하여 최소 힙을 직접 구현한 코드입니다.\n\n삽입 시 새 값을 리스트 끝에 추가한 뒤 부모와 비교하며 위로 올리는 sift-up 과정을 수행합니다. 최솟값 삭제 시 루트 값을 저장하고 마지막 원소를 루트로 이동한 다음, 두 자식 중 더 작은 값과 교환하며 아래로 내리는 sift-down 과정을 수행합니다. 부모와 자식 인덱스는 각각 (i-1)//2, 2i+1, 2i+2 공식으로 계산합니다.\n\n삽입과 삭제는 O(log n), 최솟값 확인은 O(1)입니다. printHeap 함수는 배열에 저장된 값을 트리 레벨 단위로 줄바꿈하여 출력하므로, 리스트 표현과 완전 이진 트리 구조의 대응 관계를 확인할 수 있습니다.",
        code: `class Heap:
  def __init__(self):
    self.heap = []

  def insert(self, num):#9 4 6
    self.heap.append(num)

    cur = len(self.heap)-1 #2
    while cur > 0:
      parent = (cur - 1) // 2
      if self.heap[parent] > num:
        self.heap[cur] = self.heap[parent]
        self.heap[parent] = num
        cur = parent

      else:
        break

  def pull(self):
    if not self.heap:
        return None
    if len(self.heap) == 1:
        return self.heap.pop()

    root = self.heap[0]
    self.heap[0] = self.heap.pop()

    cur = 0
    smallest = 0 #4
    while True:
        left = 2 * cur + 1 #1
        right = 2 * cur + 2#2

        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:#1(6)<4
            smallest = left
        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:#5<4
            smallest = right
        if smallest == cur:
            break

        self.heap[cur], self.heap[smallest] = self.heap[smallest], self.heap[cur]
        cur = smallest

    return root

  def printHeap(self):
    if not self.heap:
      return
    e=1
    for i in range(len(self.heap)):
      if i == 2**e-1:
        print()
        e += 1
      print(self.heap[i], end=' ')

# ────────────────────────────────────────────────────────────────────────

h = Heap()

# ────────────────────────────────────────────────────────────────────────

h.insert(9)
h.insert(4)
h.insert(6)
h.insert(5)
h.insert(61)
h.insert(46)
h.insert(7)
h.insert(8)
h.insert(1)
h.insert(11)
h.insert(19)
h.insert(87)
h.insert(65)
h.insert(20)

# ────────────────────────────────────────────────────────────────────────

h.heap

# ────────────────────────────────────────────────────────────────────────

h.pull()

# ────────────────────────────────────────────────────────────────────────

h.printHeap()`
    },
    {
        id: 39,
        title: "직접 구현한 최소 힙 기반 Dijkstra",
        subject: "그래프 알고리즘",
        category: "그래프",
        file: "Queue.ipynb",
        description: "직접 만든 최소 힙에 (거리, 정점) 튜플을 저장하여 가중치 그래프의 단일 출발점 최단 거리를 구하는 Dijkstra 알고리즘입니다.\n\n그래프는 인접 리스트로 저장하고, 시작 정점의 거리를 0으로 설정한 뒤 최소 힙에서 현재 거리가 가장 짧은 정점을 반복해서 꺼냅니다. 인접 정점으로 이동하는 새 비용이 기존 거리보다 작으면 거리 배열을 갱신하고 새 튜플을 힙에 삽입합니다. 이미 더 짧은 경로가 발견된 오래된 힙 항목은 건너뜁니다.\n\n음수 가중치가 없는 그래프에서 사용해야 하며, 인접 리스트와 힙을 사용한 시간 복잡도는 O((V+E) log V) 정도입니다. 튜플 비교를 활용해 별도의 노드 비교 연산자 없이 우선순위를 처리한 점이 구현상의 특징입니다.",
        code: `def dijkstra():
  h = Heap()
  n, m = map(int, input().split())
  start_node = int(input())
  adj = [[] for i in range(n + 1)] # 인접 리스트로 각 도시간 관계 표시
  for i in range(m):
      u, v, w = map(int, input().split())
      adj[u].append((v, w))

  distance = [1e9] * (n + 1)
  distance[start_node] = 0

  h.insert((0, start_node))

  while True:
      current_data = h.pull()
      if current_data is None:
          break

      dist, now = current_data

      if distance[now] < dist:
          continue

      for next_node, weight in adj[now]:
          cost = dist + weight
          if cost < distance[next_node]:
              distance[next_node] = cost
              h.insert((cost, next_node))

  for i in range(1, n + 1):
      print(f"{i}번 도시까지: {distance[i]}")

dijkstra()`
    },
    {
        id: 40,
        title: "완전한 Boyer–Moore 문자열 탐색",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "Bad Character 규칙과 Good Suffix 규칙을 모두 적용한 Boyer–Moore 문자열 검색 구현과 단순화 버전을 함께 담은 코드입니다.\n\n완전한 버전은 패턴의 각 문자가 마지막으로 등장한 위치를 저장하는 Bad Character 테이블과, 일치한 접미사를 다른 위치에 정렬하거나 접두사와 맞추기 위한 Good Suffix 이동 테이블을 전처리합니다. 검색은 패턴의 오른쪽 끝부터 비교하고, 불일치가 발생하면 두 규칙이 제안하는 이동량 중 더 큰 값을 선택해 여러 문자를 한 번에 건너뜁니다.\n\n테이블 출력, 매칭 위치 하이라이트, 상세 인덱스 표시, 나이브 탐색과의 비교, 무작위 스트레스 테스트, 경계 조건 테스트가 포함되어 있습니다. 단순화 버전은 Bad Character 방식만 사용해 구조를 쉽게 이해하도록 구성되어 있으며, 평균적으로 긴 텍스트에서 불필요한 비교를 크게 줄일 수 있습니다.",
        code: `def _bad_character_table(pattern):
    """
    Bad Character Table 생성

    각 문자가 '패턴에서 마지막으로 등장하는 위치'를 저장한다.
    → mismatch 발생 시 이동량 계산에 사용됨

    예: pattern = "world"
        {'w':0, 'o':1, 'r':2, 'l':3, 'd':4}
    """
    table = {}
    for i, ch in enumerate(pattern):
        table[ch] = i  # 같은 문자가 여러 번 나오면 '마지막 위치'로 덮어씀
    return table


def _good_suffix_table(pattern):
    """
    Good Suffix Table 생성

    shift[j] :
        → 패턴의 j 위치에서 mismatch 발생 시 이동해야 할 거리

    shift[0] :
        → 패턴 전체가 일치했을 때 다음 탐색 이동 거리

    내부 개념:
    - border[i] : pattern[i:]의 가장 긴 border(접두사=접미사)의 시작 위치
    - shift 배열을 통해 효율적인 점프 계산
    """
    m = len(pattern)

    # 기본값: 최대 이동 (패턴 길이만큼 이동)
    shift = [m] * (m + 1)

    # border[i]: pattern[i:]의 border 시작 위치
    border = [0] * (m + 1)

    i = m
    j = m + 1
    border[i] = j

    # 1단계: border 정보 계산
    while i > 0:
        # mismatch 발생 시 border를 따라 이동
        while j <= m and pattern[i - 1] != pattern[j - 1]:
            if shift[j] == m:
                shift[j] = j - i  # 처음 설정되는 shift 값 저장
            j = border[j]
        i -= 1
        j -= 1
        border[i] = j

    # 2단계: 남은 shift 값 채우기
    j = border[0]
    for i in range(m + 1):
        if shift[i] == m:
            shift[i] = j
        if i == j:
            j = border[j]

    return shift


def print_tables(pattern):
    """
    Bad Character / Good Suffix 테이블을 시각적으로 출력
    → 디버깅 및 학습용
    """
    m = len(pattern)
    bad_char = _bad_character_table(pattern)
    good_suffix = _good_suffix_table(pattern)

    print(f"\\n  ┌─ Boyer-Moore 건너뛰기 테이블  (패턴: '{pattern}') {'─'*20}")

    # ---------------- Bad Character Table ----------------
    print("  │")
    print("  │  [Bad Character Table]")
    print("  │  패턴 내 각 문자의 마지막 등장 위치")
    print("  │  이동량 = 불일치 위치(j) - 해당 문자 위치  (없으면 -1)")
    print("  │")

    col_w = 6
    chars = sorted(bad_char.keys())

    char_row = "  │   문자  │"
    pos_row  = "  │   위치  │"

    for ch in chars:
        char_row += f"  {ch!r:<{col_w - 2}}│"
        pos_row  += f"  {bad_char[ch]:<{col_w - 2}}│"

    sep = "  │" + "─" * (len(char_row) - 4) + "│"

    print(char_row)
    print(sep)
    print(pos_row)

    # ---------------- Good Suffix Table ----------------
    print("  │")
    print("  │  [Good Suffix Table]")
    print("  │  shift[j+1] : j 위치에서 불일치 시 이동량")
    print("  │  shift[0]   : 전체 일치 후 다음 탐색 이동량")
    print("  │")

    idx_row   = "  │   j       │"
    shift_row = "  │   shift   │"

    for j in range(m + 1):
        label = f"j={j}"
        idx_row   += f"  {label:<{col_w - 2}}│"
        shift_row += f"  {good_suffix[j]:<{col_w - 2}}│"

    sep2 = "  │" + "─" * (len(idx_row) - 4) + "│"

    print(idx_row)
    print(sep2)
    print(shift_row)
    print("  └" + "─" * (len(idx_row) - 4) + "┘")


def boyer_moore(text, pattern):
    """
    Boyer-Moore 문자열 검색 알고리즘

    핵심 전략:
    1. 패턴을 오른쪽에서 왼쪽으로 비교
    2. mismatch 발생 시:
        - Bad Character Rule
        - Good Suffix Rule
      중 더 큰 값을 사용해 점프

    반환값:
        패턴이 등장하는 시작 인덱스 리스트
    """
    print_tables(pattern)

    n, m = len(text), len(pattern)

    # 예외 처리
    if m == 0:
        return []
    if m > n:
        return []

    bad_char = _bad_character_table(pattern)
    good_suffix = _good_suffix_table(pattern)

    matches = []
    s = 0  # 현재 탐색 시작 위치 (shift)

    while s <= n - m:
        j = m - 1  # 패턴의 끝부터 비교 시작

        # 오른쪽 → 왼쪽으로 비교
        while j >= 0 and pattern[j] == text[s + j]:
            j -= 1

        # ----------- 완전 매칭 성공 -----------
        if j < 0:
            matches.append(s)
            # 전체 match 후 이동 (good suffix 활용)
            s += good_suffix[0]

        # ----------- mismatch 발생 -----------
        else:
            # Bad Character 이동량
            # → 현재 mismatch 문자 기준
            bc_shift = j - bad_char.get(text[s + j], -1)

            # Good Suffix 이동량
            gs_shift = good_suffix[j + 1]

            # 두 규칙 중 더 크게 이동 (핵심!)
            s += max(bc_shift, gs_shift)

    return matches


def print_matches(text: str, pattern: str) -> None:
    """
    검색 결과를 시각적으로 출력

    - 매칭 위치
    - 하이라이트 뷰
    - 상세 인덱스 정보
    """
    matches = boyer_moore(text, pattern)
    m = len(pattern)
    width = max(60, m + 20)

    print(f"\\n  {'─'*width}")
    print(f"  검색 텍스트  : {text!r}")
    print(f"  검색 패턴    : {pattern!r}")
    print(f"  {'─'*width}")

    if not matches:
        print(f"  결과         : 패턴을 찾지 못했습니다.")
        print(f"  {'─'*width}")
        return

    print(f"  발견 횟수    : {len(matches)}회")
    print(f"  시작 인덱스  : {matches}")

    print(f"\\n  [하이라이트 뷰]  (^ : 패턴 시작, = : 패턴 범위)")

    chunk = 60
    for line_start in range(0, len(text), chunk):
        line_end = min(line_start + chunk, len(text))
        line_text = text[line_start:line_end]

        marker = [' '] * len(line_text)

        # 매칭된 위치 표시
        for idx in matches:
            for k in range(m):
                pos = idx + k - line_start
                if 0 <= pos < len(line_text):
                    marker[pos] = '^' if k == 0 else '='

        marker_str = ''.join(marker)

        # 인덱스 눈금
        ruler = ''.join(
            str((line_start + i) // 10 % 10) if (line_start + i) % 10 == 0 else ' '
            for i in range(len(line_text))
        )
        digit = ''.join(str((line_start + i) % 10) for i in range(len(line_text)))

        print(f"  {ruler}")
        print(f"  {digit}")
        print(f"  {line_text}")
        print(f"  {marker_str}")
        if line_end < len(text):
            print()

    print(f"\\n  [상세 목록]")
    print(f"  {'번호':>4}  {'시작':>6}  {'끝':>6}  매칭 문자열")
    print(f"  {'─'*4}  {'─'*6}  {'─'*6}  {'─'*(width-22)}")

    for no, start in enumerate(matches, 1):
        end = start + m - 1
        print(f"  {no:>4}  {start:>6}  {end:>6}  {text[start:start+m]!r}")

    print(f"  {'─'*width}")

# ────────────────────────────────────────────────────────────────────────

text = 'i like apple'
pattern = 'ppl'
print_matches(text, pattern)

# ────────────────────────────────────────────────────────────────────────

def _run_tests():

    PASS = "PASS"
    FAIL = "FAIL"

    def naive(text: str, pattern: str):
        n, m = len(text), len(pattern)
        return [i for i in range(n - m + 1)
                if text[i:i + m] == pattern]

    def check(label: str, got, expected):
        ok = got == expected
        status = PASS if ok else FAIL
        print(f"  {status}  {label}")
        if not ok:
            print(f"         expected : {expected}")
            print(f"         got      : {got}")
        return ok

    total = passed = 0

    print("\\n" + "═" * 60)
    print("  [1] 기본 탐색 정확성 테스트")
    print("═" * 60)

    basic_cases = [
        ("AABAACAADAABAABA", "AABA",   "중복 패턴"),
        ("ABCABCABCABC",     "ABCABC", "긴 반복 패턴"),
        ("hello world hello","hello",  "공백 포함"),
        ("AAAAAAAAAA",       "AAA",    "동일 문자 반복"),
        ("abcdef",           "xyz",    "패턴 없음"),
        ("A",                "A",      "단일 문자 일치"),
        ("A",                "B",      "단일 문자 불일치"),
        ("ABCDE",            "ABCDE",  "패턴 = 텍스트"),
        ("ABCDE",            "ABCDEF", "패턴 > 텍스트"),
        ("",                 "A",      "빈 텍스트"),
        ("ABC",  "",  "빈 패턴 → [] 반환(정책)"),
    ]

    for text, pattern, label in basic_cases:
        total += 1
        got = boyer_moore(text, pattern)
        expected = [] if pattern == "" else naive(text, pattern)
        if check(f"{label:<26}  text={text!r:<22} pattern={pattern!r}", got, expected):
            passed += 1

    print("\\n" + "═" * 60)
    print("  [2] Bad Character 규칙 집중 테스트")
    print("      패턴에 없는 문자로 인해 크게 건너뛰는 케이스")
    print("═" * 60)

    bc_cases = [
        ("XYZXYZABAxyz",  "ABA",    "패턴 없는 문자 건너뜀"),
        ("AABCAABXAABA",  "AABA",   "불일치 문자 정렬"),
        ("GCATCGCAGAGAGTATACAGTACG", "GCAGAGAG", "교과서 예제"),
    ]

    for text, pattern, label in bc_cases:
        total += 1
        got      = boyer_moore(text, pattern)
        expected = naive(text, pattern)
        if check(f"{label:<20}  text={text!r:<28} pattern={pattern!r}", got, expected):
            passed += 1

    print("\\n" + "═" * 60)
    print("  [3] Good Suffix 규칙 집중 테스트")
    print("      접미사 일치 후 이동량이 BC보다 큰 케이스")
    print("═" * 60)

    gs_cases = [
        ("ABABABAB",      "ABAB",   "반복 접미사"),
        ("AAAABAAAABAAB", "AAAB",   "반복 접두·접미사"),
        ("ABCABABCAB",    "ABCAB",  "접미사 재정렬"),
    ]

    for text, pattern, label in gs_cases:
        total += 1
        got      = boyer_moore(text, pattern)
        expected = naive(text, pattern)
        if check(f"{label:<20}  text={text!r:<26} pattern={pattern!r}", got, expected):
            passed += 1

    print("\\n" + "═" * 60)
    print("  [4] 경계 및 스트레스 테스트")
    print("═" * 60)

    import random, string, time

    random.seed(42)
    stress_fail = 0
    for _ in range(100):
        n = random.randint(1, 200)
        m = random.randint(1, min(20, n))
        charset = string.ascii_uppercase[:random.randint(2, 6)]
        text = "".join(random.choices(charset, k=n))
        pattern = "".join(random.choices(charset, k=m))
        if boyer_moore(text, pattern) != naive(text, pattern):
            stress_fail += 1

    total += 1
    if stress_fail == 0:
        print(f"  {PASS}  무작위 100개 케이스 모두 정답")
        passed += 1
    else:
        print(f"  {FAIL}  무작위 테스트 {stress_fail}개 실패")

    big_text    = "A" * 10_000
    big_pattern = "A" * 100 + "B"
    t0 = time.perf_counter()
    boyer_moore(big_text, big_pattern)
    elapsed = time.perf_counter() - t0
    total += 1
    if elapsed < 2.0:
        print(f"  {PASS}  최악 케이스 성능  (n=10000, m=101)  {elapsed*1000:.2f} ms")
        passed += 1
    else:
        print(f"  {FAIL}  최악 케이스 성능 타임아웃  {elapsed:.2f} s")

    print("\\n" + "═" * 60)
    print("  [5] 전처리 테이블 단위 테스트")
    print("═" * 60)

    # Bad Character: 마지막 등장 위치 검증
    total += 1
    bc = _bad_character_table("ABCABC")
    expected_bc = {"A": 3, "B": 4, "C": 5}
    if check("Bad Character  pattern='ABCABC'", bc, expected_bc):
        passed += 1

    total += 1
    bc2 = _bad_character_table("AABA")
    expected_bc2 = {"A": 3, "B": 2}
    if check("Bad Character  pattern='AABA'  ", bc2, expected_bc2):
        passed += 1

    # Good Suffix: shift[1] (아무것도 일치 안 함) = 1 이상이어야 함
    total += 1
    gs = _good_suffix_table("ABCABC")
    ok = all(gs[i] >= 1 for i in range(len(gs)))
    if check("Good Suffix    모든 shift ≥ 1        ", [ok], [True]):
        passed += 1

    print("\\n" + "═" * 60)
    print("  [6] print_matches 출력 정확성 테스트")
    print("      내부적으로 boyer_moore()와 동일한 결과를 사용하는지 검증")
    print("═" * 60)

    import io, contextlib

    pm_cases = [
        ("AABAACAADAABAABA", "AABA",   [0, 9, 12]),
        ("hello world hello","hello",  [0, 12]),
        ("abcdef",           "xyz",    []),          # 매치 없음
        ("AAAAAAAAAA",       "AAA",    [0,1,2,3,4,5,6,7]),
    ]

    for text, pattern, expected_matches in pm_cases:
        total += 1

        got = boyer_moore(text, pattern)

        buf = io.StringIO()
        try:
            with contextlib.redirect_stdout(buf):
                print_matches(text, pattern)
            output_ok = True
        except Exception as e:
            output_ok = False

        ok = (got == expected_matches) and output_ok
        status = PASS if ok else FAIL
        print(f"  {status}  text={text!r:<22} pattern={pattern!r:<8} → {got}")
        if not ok:
            print(f"         expected : {expected_matches}")
        if ok:
            passed += 1

    print("\\n" + "═" * 60)
    print(f"  결과: {passed} / {total} 통과"
          + ("전체 통과" if passed == total else ""))
    print("═" * 60)

# ────────────────────────────────────────────────────────────────────────

_run_tests()

# ────────────────────────────────────────────────────────────────────────

def build_skip_table(pattern):
    # 패턴의 길이
    m = len(pattern)

    # 각 문자에 대해 이동 거리(shift)를 저장할 딕셔너리
    skip = {}

    # 패턴의 마지막 문자는 제외하고 처리
    # (마지막 문자는 mismatch 시 기본적으로 m만큼 이동하기 때문)
    for i in range(m-1):
        # 해당 문자가 등장했을 때 얼마나 이동할지 계산
        # 패턴 끝에서부터의 거리 = m - i - 1
        skip[pattern[i]] = m - i - 1

    skip[pattern[-1]] = m



    s = [skip.keys(),['——'*(len(skip.keys()))] , skip.values()]
    print('—' * max(5, m//2) + ' Skip Table ' + '—' * max(5, m//2))
    for i in s:
      print(*i)

    print()

    return skip


def simple_boyer_moore(text, pattern):
    n, m = len(text), len(pattern)

    if m == 0:
        return []

    skip = build_skip_table(pattern)

    found = []

    i = 0

    while i <= n - m:
        j = m - 1

        # 뒤에서부터 한 글자씩 비교 (일치하면 계속 이동)
        while j >= 0 and text[i + j] == pattern[j]:
            j -= 1

        if j < 0:
            found.append(i + 1)
            i += 1

        else:
            mismatch_char = text[i + j]

            shift = skip.get(mismatch_char, m)

            i += shift
    print('—' * max(10, n//2) + ' 상세 위치 ' + '—' * max(10, n//2))
    print(text)
    j = 1
    for pos in found:
        print(' ' * (pos - j) + '^', end='')
        j = pos + 1


    return found

# ────────────────────────────────────────────────────────────────────────

text = "ABAAABCDABC"
pattern = "ABC"

simple_boyer_moore(text, pattern)

# ────────────────────────────────────────────────────────────────────────

text = '간장 공장 공장장은 강 공장장이고 된장 공장 공장장은 장 공장장이다'
pattern = '공장장'

simple_boyer_moore(text, pattern)

# ────────────────────────────────────────────────────────────────────────

text = 'Hello, world! helloworldh'
pattern = 'world'

simple_boyer_moore(text, pattern)

# ────────────────────────────────────────────────────────────────────────

# simple_boyer_moore(input('Text: '), input('Pattern: '))`
    },
    {
        id: 41,
        title: "KMP LPS를 이용한 최소 반복 문자열 탐색",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "문자열을 구성하는 가장 짧은 반복 단위를 KMP의 LPS 배열을 이용해 찾는 코드입니다.\n\nLPS[i]는 문자열의 0번부터 i번까지 구간에서 접두사이면서 접미사인 가장 긴 부분 문자열의 길이입니다. 전체 문자열 길이 n에서 마지막 LPS 값을 빼면 반복 단위의 후보 길이를 얻을 수 있습니다. n이 후보 길이로 정확히 나누어지면 앞쪽 후보 문자열이 반복 단위이며, 그렇지 않으면 문자열 전체가 최소 단위입니다.\n\nLPS 계산은 이전 결과를 이용해 불일치 시 비교 위치를 되돌리므로 O(n)에 수행됩니다. 반복 문자열, 단일 문자, 완전히 반복되지 않는 문자열 등 다양한 테스트 케이스와 자동 통과 여부 출력이 포함되어 있습니다.",
        code: `def get_lps(s):
    n = len(s)
    '''
    lps[i] = s[0:i+1] 구간에서
    "접두사"이면서 "접미사"인 부분 문자열의 최대 길이
    '''
    lps = [0] * n

    j = 0

    # i는 현재 검사 위치 (두 번째 문자부터 시작)
    for i in range(1, n):
        '''
        불일치가 발생하면 이전에 계산한 lps 값을 이용해
        가능한 가장 긴 접두사 길이로 점프
        '''
        while j > 0 and s[i] != s[j]:
            j = lps[j - 1]

        if s[i] == s[j]:
            j += 1
            lps[i] = j

    return lps


def minimal_pattern(s):
    lps = get_lps(s)
    n = len(s)

    # 전체 길이 - 마지막 lps 값 => 반복 패턴의 후보 길이
    length = n - lps[-1]

    # 문자열 길이가 패턴 길이로 딱 나눠 떨어지면 해당 패턴이 반복된 것
    if n % length == 0:
        return s[:length]
    else:
        return s


# -------------------------
# 테스트 코드
# -------------------------
def run_tests():
    test_cases = [
        ("ABABABAB", "AB"),
        ("ABCABCABC", "ABC"),
        ("ABAABA", "ABA"),
        ("ABCD", "ABCD"),
        ("AAAAAA", "A"),
        ("A", "A"),
        ("ABABABC", "ABABABC"),
        ("XYZXYZXYZXYZ", "XYZ"),
        ("ABABABABA", "ABABABABA"),  # 완전 반복 아님
        ("ZZZZZZZ", "Z"),
    ]

    print("===== TEST START =====")
    passed = 0

    for i, (input_str, expected) in enumerate(test_cases, 1):
        result = minimal_pattern(input_str)

        if result == expected:
            print(f"[PASS] Test {i}: {input_str} → {result}")
            passed += 1
        else:
            print(f"[FAIL] Test {i}: {input_str}")
            print(f"       Expected: {expected}")
            print(f"       Got     : {result}")

    print("======================")
    print(f"Passed {passed} / {len(test_cases)} tests")



run_tests()`
    },
    {
        id: 42,
        title: "정렬을 이용한 최소 차이 숫자 쌍",
        subject: "알고리즘 성능 분석",
        category: "정렬",
        file: "정보과학_5주차_4조_(손원희,_송연경,_주윤재).ipynb",
        description: "여러 정수 중 차이가 가장 작은 두 수를 정렬 후 인접 비교로 찾는 코드입니다.\n\n입력 배열을 오름차순으로 정렬하면 최소 차이를 만드는 두 값은 반드시 정렬된 배열에서 서로 인접합니다. 따라서 모든 쌍을 비교하는 O(n²) 브루트포스 대신, 정렬 O(n log n) 이후 한 번의 선형 순회로 최소 차이와 해당 숫자 쌍을 갱신합니다.\n\n전체 시간 복잡도는 정렬이 지배하므로 O(n log n), 추가 순회는 O(n)입니다. 코드 안에 각 명령의 실행 횟수와 f(n)을 직접 주석으로 계산해 두어 점근적 복잡도 분석 과정을 함께 확인할 수 있습니다.",
        code: `n = int(input('숫자 개수 입력: ')) # 1
arr = list(map(int, input('숫자 입력(띄어쓰기로 구분): ').split())) # n

arr.sort() # nlogn

min_diff = float('inf') # 1
min_pair = () # 1

for i in range(1, n): # n - 1
    diff = arr[i] - arr[i-1] # n - 1
    if diff < min_diff: # n - 1
        min_diff = diff # n - 1
        min_pair = (arr[i], arr[i-1]) # n - 1

print(f'{min_pair[0]} - {min_pair[1]} = {min_diff}') # 1

#f(n) = 5n + nlogn - 1
#O(nlogn)`
    },
    {
        id: 43,
        title: "DFS 기반 격자 섬 개수 계산",
        subject: "그래프 탐색",
        category: "그래프",
        file: "정보과학_5주차_4조_(손원희,_송연경,_주윤재).ipynb",
        description: "0과 1로 구성된 2차원 격자에서 상하좌우로 연결된 땅의 묶음, 즉 섬의 개수를 DFS로 계산하는 코드입니다.\n\n전체 격자를 순회하다가 값이 1인 칸을 발견하면 새로운 섬으로 판단해 개수를 증가시키고 DFS를 시작합니다. DFS는 현재 칸을 0으로 바꾸어 방문 처리한 뒤 네 방향의 이웃을 재귀적으로 탐색합니다. 범위를 벗어나거나 물이거나 이미 방문한 칸에서는 즉시 반환합니다.\n\n각 칸은 최대 한 번 방문되므로 시간 복잡도는 O(nm), 재귀 스택은 최악의 경우 O(nm)까지 사용할 수 있습니다. 별도의 visited 배열 없이 입력 격자 자체를 수정해 방문 여부를 기록하여 추가 메모리를 줄인 구현입니다.",
        code: `def dfs(x, y): # => n * m
    # 범위 밖 or 물 or 이미 방문
    if x < 0 or x >= n or y < 0 or y >= m or grid[x][y] == 0: # 1
        return # 1

    # 방문 처리
    grid[x][y] = 0 # 1

    # 4방향 탐색
    dfs(x+1, y) # 1
    dfs(x-1, y) # 1
    dfs(x, y+1) # 1
    dfs(x, y-1) # 1


n, m = map(int, input('전체 격자 크기 입력: ').split()) # 1
print("격자 입력(0: 물, 1: 땅)") # 1
grid = [list(map(int, input().split())) for _ in range(n)] # n * m

count = 0 # 1

for i in range(n): # n
    for j in range(m): # n * m
        if grid[i][j] == 1: # n * m
            dfs(i, j) # n * m
            count += 1 # n * m

print(f'총 섬의 개수: {count}') # 1
# O(n * m)`
    }
];
