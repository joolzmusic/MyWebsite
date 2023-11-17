
function downloadCV() {
  var link = document.createElement('a');
  link.href = '/resume/CS_resume.pdf'; // Replace with the actual path to your CV file
  link.download = 'CS_resume.pdf'; // Specify the desired filename for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadMusic() {
  var link = document.createElement('a');
  link.href = '/resume/musicRes.pdf'; // Replace with the actual path to your CV file
  link.download = 'musicRes.pdf'; // Specify the desired filename for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
