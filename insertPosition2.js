var searchInsert = function(nums, target) {
    let first = 0
    let last = nums.length - 1
    let index = Math.floor(nums.length / 2)

    if (nums[first] > target) {
        return 0
    }

    if (nums[last] < target) {
        return nums.length
    }

    while (first + 1 != last) {
        if (nums[index] === target) {
            return index
        } else if (nums[index] < target) {
            first = index
            index = Math.ceil((first + last) / 2)
        } else if (nums[index] > target) {
            last = index
            index = Math.floor((first + last) / 2)
        } 
    }

    if (nums[first] === target) {
        return first
    } else {
        return last
    }
};

console.log(searchInsert([1,3], 1))