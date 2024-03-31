// ============= import modules =============

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ============= document elements =============

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

// ============= event function =============

function createPromise(event) {
  event.preventDefault();

  const state = form.state.value;
  const delay = parseInt(form.delay.value); // Nan if invalid

  // ============= create promise ==============

  if (delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else if (state === 'rejected') {
          reject(delay);
        }
      }, delay);
    });

    // ============= processing of promise value ==============

    promise
      .then(delay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })

      .catch(delay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  }

  event.currentTarget.reset(); // reset input value
}
