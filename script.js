document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoFile = document.getElementById('videoFile').files[0];
    const title = document.getElementById('videoTitle').value;
    const description = document.getElementById('videoDescription').value;

    // Handle video upload logic here
    console.log('Video uploaded:', videoFile, title, description);
})
  ;
