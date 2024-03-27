// import modules
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// =======================================================

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const state = event.target.state.value;
  const delay = event.target.delay.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.success({
            title: 'Resolve',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.error({
            title: 'Reject',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topLeft',
          })
        );
      }
    }, delay);
  });
}

// =======================================================
