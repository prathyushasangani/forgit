#quick_sort
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([3,6,8,10,1,2,1]))
# Output: [1, 1, 2, 3, 6, 8, 10]


#merge_sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    result = []
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    while (len(left) > 0) and (len(right) > 0):
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    result += left
    result += right
    return result

print(merge_sort([3,6,8,10,1,2,1]))


#bubble_sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([3,6,8,10,1,2,1]))

#insertion_sort
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertion_sort([3,6,8,10,1,2,1]))

#selection_sort
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[min_idx] > arr[j]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([3,6,8,10,1,2,1]))

#heap_sort
def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and arr[i] < arr[l]:
        largest = l
    if r < n and arr[largest] < arr[r]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n, -1, -1):
        heapify(arr, n, i)
    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

print(heap_sort([3,6,8,10,1,2,1]))

#radix_sort
def counting_sort(arr, exp1):
    n = len(arr)
    output = [0] * (n)
    count = [0] * (10)
    for i in range(0, n):
        index = (arr[i]//exp1)
        count[ (index)%10 ] += 1
    for i in range(1,10):
        count[i] += count[i-1]
    i = n-1
    while i>=0:
        index = (arr[i]//exp1)
        output[ count[ (index)%10 ] - 1] = arr[i]
        count[ (index)%10 ] -= 1
        i -= 1
    i = 0
    for i in range(0,len(arr)):
        arr[i] = output[i]

def radix_sort(arr):
    max1 = max(arr)
    exp = 1
    while max1//exp > 0:
        counting_sort(arr,exp)
        exp *= 10
    return arr

print(radix_sort([3,6,8,10,1,2,1]))

#bucket_sort
def bucket_sort(arr):
    bucket = []
    for i in range(len(arr)):
        bucket.append([])
    for j in arr:
        index_b = int(10 * j)
        bucket[index_b].append(j)
    for i in range(len(arr)):
        bucket[i] = sorted(bucket[i])
    k = 0
    for i in range(len(arr)):
        for j in range(len(bucket[i])):
            arr[k] = bucket[i][j]
            k += 1
    return arr


#shell_sort
def shell_sort(arr):
    n = len(arr)
    gap = n//2
    while gap > 0:
        for i in range(gap,n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j-gap] >temp:
                arr[j] = arr[j-gap]
                j -= gap
            arr[j] = temp
        gap //= 2
    return arr

print(shell_sort([3,6,8,10,1,2,1]))

#comb_sort
def getNextGap(gap):
    gap = (gap * 10)//13
    if gap < 1:
        return 1
    return gap

def comb_sort(arr):
    n = len(arr)
    gap = n
    swapped = True
    while gap != 1 or swapped == 1:
        gap = getNextGap(gap)
        swapped = False
        for i in range(0, n-gap):
            if arr[i] > arr[i + gap]:
                arr[i], arr[i + gap]=arr[i + gap], arr[i]
                swapped = True
    return arr

print(comb_sort([3,6,8,10,1,2,1]))

#pigeonhole_sort
def pigeonhole_sort(arr):
    min_ = min(arr)
    max_ = max(arr)
    size = max_ - min_ + 1
    holes = [0] * size
    for x in arr:
        holes[x - min_] += 1
    i = 0
    for count in range(size):
        while holes[count] > 0:
            holes[count] -= 1
            arr[i] = count + min_
            i += 1
    return arr

print(pigeonhole_sort([3,6,8,10,1,2,1]))

#cycle_sort
def cycle_sort(arr):
    writes = 0
    for cycleStart in range(0, len(arr) - 1):
        item = arr[cycleStart]
        pos = cycleStart
        for i in range(cycleStart + 1, len(arr)):
            if arr[i] < item:
                pos += 1
        if pos == cycleStart:
            continue
        while item == arr[pos]:
            pos += 1
        arr[pos], item = item, arr[pos]
        writes += 1
        while pos != cycleStart:
            pos = cycleStart
            for i in range(cycleStart + 1, len(arr)):
                if arr[i] < item:
                    pos += 1
            while item == arr[pos]:
                pos += 1
            arr[pos], item = item, arr[pos]
            writes += 1
    return arr

print(cycle_sort([3,6,8,10,1,2,1]))

#stooge_sort
def stooge_sort(arr, l, h):
    if l >= h:
        return
    if arr[l] > arr[h]:
        arr[l], arr[h] = arr[h], arr[l]
    if h-l+1 > 2:
        t = (h-l+1) // 3
        stooge_sort(arr, l, h-t)
        stooge_sort(arr, l+t, h)
        stooge_sort(arr, l, h-t)
    return arr

print(stooge_sort([3,6,8,10,1,2,1], 0, 6))

#gnome_sort
def gnome_sort(arr):
    n = len(arr)
    index = 0
    while index < n:
        if index == 0:
            index = index + 1
        if arr[index] >= arr[index - 1]:
            index = index + 1
        else:
            arr[index], arr[index-1] = arr[index-1], arr[index]
            index = index - 1
    return arr

print(gnome_sort([3,6,8,10,1,2,1]))

#bitonic_sort
def compAndSwap(arr, i, j, dire):
    if (arr[i] > arr[j] and dire == 1) or (arr[i] < arr[j] and dire == 0):
        arr[i], arr[j] = arr[j], arr[i]

def bitonicMerge(arr, low, cnt, dire):
    if cnt > 1:
        k = cnt//2
        for i in range(low , low+k):
            compAndSwap(arr, i, i+k, dire)
        bitonicMerge(arr, low, k, dire)
        bitonicMerge(arr, low+k, k, dire)

def bitonicSort(arr, low, cnt, dire):
    if cnt > 1:
        k = cnt//2
        bitonicSort(arr, low, k, 1)
        bitonicSort(arr, low+k, k, 0)
        bitonicMerge(arr, low, cnt, dire)
    return arr

print(bitonicSort([3,6,8,10,1,2,1], 0, 7, 1))



print("-"*30)
def test_sorting_functions():
    # Define a list of sorting functions
    sorting_functions = [bubble_sort, selection_sort, insertion_sort, quick_sort, merge_sort, heap_sort, radix_sort, counting_sort, bucket_sort, shell_sort]

    # Define test cases
    test_cases = [
        ([3, 2, 1], [1, 2, 3]),
        ([1], [1]),
        ([], []),
        ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
        ([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
        ([1, 5, 2, 4, 3], [1, 2, 3, 4, 5]),
    ]

    # Test each sorting function with each test case
    for sort in sorting_functions:
        for unsorted_list, sorted_list in test_cases:
            assert sort(unsorted_list) == sorted_list