var twoSum = function(nums, target) {
    let numsMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        let reqNum = target - nums[i];

        if(numsMap.has(reqNum)) {
            return [numsMap.get(reqNum), i];
        } else numsMap.set(nums[i], i);
    }
};