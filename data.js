// 코드 아카이브 데이터
const codesData = [
    {
        id: 1,
        title: "거스름돈 문제 - 그리디 알고리즘",
        subject: "알고리즘 성능 분석",
        category: "그리디",
        file: "6주차)_알고리즘_성능_분석_발표자료_제출.ipynb",
        description: "배수 관계를 검사하고 그리디 알고리즘으로 거스름돈을 계산하는 프로그램",
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
            cnt = change // d
        else:
            cnt = min(change // d, stock[d])

        result[d] = cnt
        change -= cnt * d

    if change != 0:
        return None
    return result`
    },
    {
        id: 2,
        title: "LCS (최장공통부분수열) - DP",
        subject: "동적계획법",
        category: "DP",
        file: "8차시_DP_1조 (1).ipynb",
        description: "두 문자열의 최장공통부분수열을 찾는 동적계획법 알고리즘",
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
        id: 3,
        title: "최대 부분배열 합 - 분할정복",
        subject: "분할정복",
        category: "분할정복",
        file: "8차시_DP_1조 (1).ipynb",
        description: "분할정복을 이용한 최대 부분배열 합 구하기",
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

    if left_sum == float('-inf') or right_sum == float('-inf'):
        return float('-inf')
    return left_sum + right_sum

def divide_and_conquer(arr, left, right):
    if not arr:
        raise ValueError("배열이 비어 있습니다.")

    if left == right:
        return arr[left]

    mid = (left + right) // 2
    left_max  = divide_and_conquer(arr, left, mid)
    right_max = divide_and_conquer(arr, mid + 1, right)
    cross_max = max_crossing_sum(arr, left, mid, right)

    return max(left_max, right_max, cross_max)`
    },
    {
        id: 4,
        title: "최대 부분배열 합 - DP (Kadane's)",
        subject: "동적계획법",
        category: "DP",
        file: "8차시_DP_1조 (1).ipynb",
        description: "Kadane's 알고리즘을 이용한 동적계획법 풀이",
        code: `def dynamic_programming(arr):
    if not arr:
        raise ValueError("배열이 비어 있습니다.")

    max_sum     = arr[0]
    current_sum = arr[0]

    for i in range(1, len(arr)):
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum     = max(max_sum, current_sum)

    return max_sum

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(dynamic_programming(arr))  # 6`
    },
    {
        id: 5,
        title: "선형 탐사 - 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "선형 탐사를 사용한 충돌 해결 해시 테이블",
        code: `class HashTableLinearProbing:
    def __init__(self, size=7):
        self.size = size
        self.table = [None] * size
    
    def hash_fn(self, key):
        return key % self.size
    
    def insert(self, key, value):
        idx = self.hash_fn(key)
        original_idx = idx
        
        while self.table[idx] is not None:
            if self.table[idx][0] == key:
                self.table[idx] = (key, value)
                return
            idx = (idx + 1) % self.size
            if idx == original_idx:
                print("테이블이 가득 찼습니다")
                return
        
        self.table[idx] = (key, value)
    
    def search(self, key):
        idx = self.hash_fn(key)
        original_idx = idx
        
        while self.table[idx] is not None:
            if self.table[idx][0] == key:
                return self.table[idx][1]
            idx = (idx + 1) % self.size
            if idx == original_idx:
                break
        
        return None`
    },
    {
        id: 6,
        title: "체이닝 - 해시 테이블",
        subject: "해시 테이블",
        category: "해시",
        file: "해시테이블_발표_코드 (10).ipynb",
        description: "연결 리스트를 사용한 체이닝 해시 테이블",
        code: `class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTableChaining:
    def __init__(self, size=7):
        self.size = size
        self.table = [None] * size

    def hash_fn(self, key):
        return key % self.size

    def insert(self, key, value):
        idx = self.hash_fn(key)
        cur = self.table[idx]
        
        while cur:
            if cur.key == key:
                cur.value = value
                return
            cur = cur.next

        new_node = Node(key, value)
        new_node.next = self.table[idx]
        self.table[idx] = new_node

    def search(self, key):
        idx = self.hash_fn(key)
        cur = self.table[idx]
        
        while cur:
            if cur.key == key:
                return cur.value
            cur = cur.next
        
        return None`
    },
    {
        id: 7,
        title: "Boyer-Moore 문자열 탐색",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "Boyer-Moore 알고리즘을 이용한 효율적인 문자열 탐색",
        code: `def build_bad_match_table(pattern):
    table = {}
    for i in range(len(pattern) - 1):
        table[pattern[i]] = len(pattern) - 1 - i
    return table

def boyer_moore(text, pattern):
    if not pattern or not text:
        return []
    
    bad_match = build_bad_match_table(pattern)
    result = []
    i = len(pattern) - 1
    
    while i < len(text):
        j = len(pattern) - 1
        while j >= 0 and text[i] == pattern[j]:
            i -= 1
            j -= 1
        
        if j < 0:
            result.append(i + 1)
            i += len(pattern) + 1
        else:
            shift = bad_match.get(text[i], len(pattern))
            i += shift
    
    return result`
    },
    {
        id: 8,
        title: "KMP 알고리즘 - LPS 테이블",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "KMP 알고리즘의 경계 테이블 생성 및 패턴 매칭",
        code: `class KMP:
    def __init__(self):
        pass
    
    def build_lps(self, pattern):
        lps = [0] * len(pattern)
        j = 0
        
        for i in range(1, len(pattern)):
            while j > 0 and pattern[i] != pattern[j]:
                j = lps[j - 1]
            
            if pattern[i] == pattern[j]:
                j += 1
                lps[i] = j
        
        return lps
    
    def kmp_search(self, text, pattern):
        lps = self.build_lps(pattern)
        j = 0
        result = []
        
        for i in range(len(text)):
            while j > 0 and text[i] != pattern[j]:
                j = lps[j - 1]
            
            if text[i] == pattern[j]:
                j += 1
            
            if j == len(pattern):
                result.append(i - len(pattern) + 1)
                j = lps[j - 1]
        
        return result`
    },
    {
        id: 9,
        title: "거듭제곱 해싱 - Rabin-Karp",
        subject: "문자열 처리",
        category: "탐색",
        file: "정보_3주차_4조_발표_자료(손원희,_송연경,_주윤재).ipynb",
        description: "Rabin-Karp 알고리즘을 이용한 해시 기반 문자열 탐색",
        code: `def rabin_karp(txt, pat, q):
    n = len(txt)
    m = len(pat)
    d = 2
    h = pow(d, m-1) % q
    p_hash = 0
    t_hash = 0
    result = []
    
    for i in range(m):
        p_hash = (d * p_hash + ord(pat[i])) % q
        t_hash = (d * t_hash + ord(txt[i])) % q
    
    for i in range(n - m + 1):
        if p_hash == t_hash:
            if txt[i:i+m] == pat:
                result.append(i)
        
        if i < n - m:
            t_hash = (d * (t_hash - ord(txt[i]) * h) + ord(txt[i + m])) % q
            if t_hash < 0:
                t_hash += q
    
    return result`
    },
    {
        id: 10,
        title: "점 사이 거리 - 분할정복",
        subject: "분할정복",
        category: "분할정복",
        file: "7주차)_분할정복_발표자료_제출.ipynb",
        description: "2D 평면에서 가장 가까운 두 점의 거리를 구하는 분할정복 알고리즘",
        code: `import math

def distance(p1, p2):
    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

def closest_pair_recursive(px, py):
    n = len(px)
    
    if n <= 3:
        min_dist = float('inf')
        for i in range(n):
            for j in range(i + 1, n):
                min_dist = min(min_dist, distance(px[i], px[j]))
        return min_dist
    
    mid = n // 2
    midpoint = px[mid]
    
    pyl = [p for p in py if p[0] <= midpoint[0]]
    pyr = [p for p in py if p[0] > midpoint[0]]
    
    dl = closest_pair_recursive(px[:mid], pyl)
    dr = closest_pair_recursive(px[mid:], pyr)
    
    d = min(dl, dr)
    
    strip = [p for p in py if abs(p[0] - midpoint[0]) < d]
    
    for i in range(len(strip)):
        j = i + 1
        while j < len(strip) and (strip[j][1] - strip[i][1]) < d:
            d = min(d, distance(strip[i], strip[j]))
            j += 1
    
    return d`
    },
    {
        id: 11,
        title: "광고 삽입 최적 구간",
        subject: "분할정복",
        category: "분할정복",
        file: "7주차)_분할정복_발표자료_제출.ipynb",
        description: "비디오에서 광고를 삽입할 최적 구간을 찾는 문제",
        code: `def solution(video_sec, adv_sec, logs):
    video_time = time_to_seconds(video_sec)
    adv_time = time_to_seconds(adv_sec)
    
    if video_time < adv_time:
        return "00:00:00"
    
    play_count = [0] * (video_time + 1)
    
    for log in logs:
        start = time_to_seconds(log[0])
        end = time_to_seconds(log[1])
        play_count[start] += 1
        play_count[end] -= 1
    
    for i in range(1, len(play_count)):
        play_count[i] += play_count[i-1]
    
    min_adv = min(play_count[:video_time - adv_time + 1])
    
    for i in range(video_time - adv_time + 1):
        if play_count[i] == min_adv:
            return seconds_to_time(i)
    
    return "00:00:00"

def time_to_seconds(time_str):
    h, m, s = map(int, time_str.split(':'))
    return h * 3600 + m * 60 + s

def seconds_to_time(seconds):
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:02d}"`
    },
    {
        id: 12,
        title: "Heap Tree - 우선순위 큐",
        subject: "자료구조",
        category: "자료구조",
        file: "Queue.ipynb",
        description: "최소 힙(Min Heap) 구현을 이용한 우선순위 큐",
        code: `class MinHeap:
    def __init__(self):
        self.heap = [0]
    
    def push(self, item):
        self.heap.append(item)
        self.heapify_up(len(self.heap) - 1)
    
    def heapify_up(self, i):
        while i // 2 > 0:
            if self.heap[i] < self.heap[i // 2]:
                self.heap[i], self.heap[i // 2] = self.heap[i // 2], self.heap[i]
            i = i // 2
    
    def pop(self):
        if len(self.heap) < 2:
            return None
        item = self.heap[1]
        self.heap[1] = self.heap[len(self.heap) - 1]
        self.heap.pop()
        self.heapify_down(1)
        return item
    
    def heapify_down(self, i):
        while (i * 2) < len(self.heap):
            smallest = i
            if self.heap[i * 2] < self.heap[smallest]:
                smallest = i * 2
            if i * 2 + 1 < len(self.heap) and self.heap[i * 2 + 1] < self.heap[smallest]:
                smallest = i * 2 + 1
            if smallest != i:
                self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            i = smallest`
    },
    {
        id: 13,
        title: "다익스트라 알고리즘",
        subject: "그래프",
        category: "그래프",
        file: "Queue.ipynb",
        description: "우선순위 큐를 이용한 다익스트라 최단경로 알고리즘",
        code: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_distance, current_node = heapq.heappop(pq)
        
        if current_distance > distances[current_node]:
            continue
        
        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

# 사용 예
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('C', 1), ('D', 5)],
    'C': [('D', 8), ('E', 10)],
    'D': [('E', 2)],
    'E': []
}

result = dijkstra(graph, 'A')`
    },
    {
        id: 14,
        title: "N-Queens 문제 - 백트래킹",
        subject: "백트래킹",
        category: "백트래킹",
        file: "9차시_Backtracking_1조_발표_자료 (2).ipynb",
        description: "백트래킹을 이용한 N-Queens 문제 해결",
        code: `def solve_n_queens(n):
    solutions = []
    board = [-1] * n
    
    def is_safe(row, col):
        for prev_row in range(row):
            prev_col = board[prev_row]
            if prev_col == col:
                return False
            if abs(prev_row - row) == abs(prev_col - col):
                return False
        return True
    
    def backtrack(row):
        if row == n:
            solutions.append(board[:])
            return
        
        for col in range(n):
            if is_safe(row, col):
                board[row] = col
                backtrack(row + 1)
                board[row] = -1
    
    backtrack(0)
    return solutions

# 4-Queens 문제 해결
solutions = solve_n_queens(4)
for i, solution in enumerate(solutions):
    print(f"해결책 {i+1}: {solution}")`
    },
    {
        id: 15,
        title: "문제 5번 - 조합 최적화",
        subject: "알고리즘",
        category: "DP",
        file: "정보과학_5주차_4조_(손원희,_송연경,_주윤재).ipynb",
        description: "동적계획법을 이용한 조합 최적화 문제",
        code: `def solve_optimization():
    n = int(input("크기 입력: "))
    items = []
    
    for i in range(n):
        value = int(input(f"항목 {i+1} 값: "))
        items.append(value)
    
    # DP 테이블 초기화
    dp = [0] * (n + 1)
    
    # 동적계획법 수행
    for i in range(n):
        for j in range(n, items[i] - 1, -1):
            dp[j] = max(dp[j], dp[j - items[i]] + items[i])
    
    return max(dp)`
    },
    {
        id: 16,
        title: "문제 6번 - 경로 찾기",
        subject: "알고리즘",
        category: "DP",
        file: "정보과학_5주차_4조_(손원희,_송연경,_주윤재).ipynb",
        description: "격자에서 경로의 개수를 구하는 DP 문제",
        code: `def count_paths(m, n):
    # m x n 격자에서 우측/하향으로만 이동 가능
    dp = [[1] * n for _ in range(m)]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    return dp[m-1][n-1]

# 테스트
result = count_paths(3, 3)
print(f"3x3 격자의 경로 개수: {result}")`
    }
];
