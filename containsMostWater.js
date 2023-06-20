function containsMostWater(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;
  
    while (left < right) {
      const minHeight = Math.min(heights[left], heights[right]);
      const width = right - left;
      const area = minHeight * width;
      maxArea = Math.max(maxArea, area);
  
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
}

module.exports = containsMostWater;
