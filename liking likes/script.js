const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-text');

// Set an initial like count
let count = 0;

// Function to update the like count and display it
function updateLikeCount() {
    likeCount.textContent = `${count} likes`;
}

// Event listener for the like button click
likeButton.addEventListener('click', () => {
    // Increment the like count
    count++;

    // Update the like count display
    updateLikeCount();
});
