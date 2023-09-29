function slove(nums) {
  while (nums.length > 1) {
    const condensed = [];

    for (let i = 0; i < nums.length - 1; i++) {
      condensed[i] = nums[i] + nums[i + 1];
    }

    nums = condensed;
  }

  console.log(nums[0]);
}
