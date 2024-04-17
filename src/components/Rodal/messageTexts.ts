export const messageText = {
    0: {
        message: 'Ви натиснули "Ухід", але не було ніякої минулої дії. Можливо Ви помилились кнопкою?',
        noText: 'записати як "Прихід"',
        yesText: 'скасувати дію'
    },
    1: {
        message: 'Ви натиснули "Ухід", хоча минулий раз теж було натиснуто "Ухід"! Можливо Ви помилились кнопкою? ',
        noText: 'записати як "Прихід"',
        yesText: 'скасувати дію'
    },
    2: {
        message: 'Ви натиснули "Прихід", хоча минулий раз теж було натиснуто "Прихід"! Можливо Ви помилились кнопкою? ',
        noText: 'записати як "Ухід"',
        yesText: 'записати як "Прихід"'
    }, 
};


// PP
// Можливо Ви помилились кнопкою?
// записати як ухід (fasleEvent) - записати як прихід (надіслати trueEvent)

// UU
// Можливо Ви помилились кнопкою?
// записати як прихід (fasleEvent) - скасувати дію (таймер)

// nU
// Можливо Ви помилились кнопкою?
// записати як прихід (fasleEvent) - скасувати дію (таймер)