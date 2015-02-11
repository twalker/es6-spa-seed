export default function(){
  return new Promise(function(resolve, reject){
    if (document.readyState === 'complete') {
      resolve();
    } else {
      let onReady = ()=> {
        resolve();
        document.removeEventListener('DOMContentLoaded', onReady, true);
        window.removeEventListener('load', onReady, true);
      }
      document.addEventListener('DOMContentLoaded', onReady, true);
      window.addEventListener('load', onReady, true);
      document.addEventListener('error', reject, true);
      window.addEventListener('error', reject, true);
    }
  });
}
