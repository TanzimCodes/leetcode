/**
 * Count the number of pairs of equal rows and columns in a 2D grid.
 * 
 * Two rows or two columns are considered "equal" if they contain the same sequence of elements.
 * 
 * Approach:
 * 1. **Create a Frequency Map for Rows**:
 *    - First, iterate through all rows in the grid and convert each row into a string (using `join(',')`) for easy comparison.
 *    - Store the frequency of each row string in a `Map` object (`map`). The key will be the string representation of the row, and the value will be the count of how many times that row appears in the grid.
 * 
 * 2. **Generate and Compare Columns**:
 *    - Next, for each column in the grid, construct a column array by iterating over each row and extracting the element at the corresponding column index.
 *    - Convert the column into a string (again using `join(',')`).
 *    - Check if this column string exists in the previously constructed row frequency map. If it does, increment the match counter (`matchFound`) by the frequency value.
 * 
 * 3. **Return the Result**:
 *    - The result (`matchFound`) will contain the total count of matching row-column pairs.
 * 
 * Time Complexity:
 * - **O(n * m)** where `n` is the number of rows and `m` is the number of columns in the grid. 
 *   - We iterate through all rows to populate the map (`O(n)`), and then for each column, we generate its string representation and check it in the map (`O(m)`).
 * 
 * Space Complexity:
 * - **O(n * m)**: The space is used by the `Map` to store row strings and by the column arrays.
 * 
 * @param {number[][]} grid - The 2D grid.
 * @return {number} - The number of pairs of equal rows and columns.
 */
var equalPairs = function (grid) {
    let matchFound = 0;
    const map = new Map();

    // Step 1: Store the frequency of each row as a string in the map
    for (const row of grid) {
        const rowStr = row.join(',');  // Convert row to string representation
        map.set(rowStr, (map.get(rowStr) || 0) + 1);  // Count occurrences of each row
    }

    const colHeadRow = grid[0];  // Use the first row to determine the number of columns

    // Step 2: Iterate over each column
    for (let i = 0; i < colHeadRow.length; i++) {
        let colArr = [];
        colArr.push(colHeadRow[i]);  // Start by adding the first element of the column
        // Construct the full column by adding elements from each row
        for (let r = 1; r < grid.length; r++) {
            colArr.push(grid[r][i]);
        }

        // Convert column to string and check for matches with the row map
        const colStr = colArr.join(',');
        if (map.has(colStr)) {
            matchFound += map.get(colStr);  // Add the count of matching rows
        }
    }

    return matchFound;
};
