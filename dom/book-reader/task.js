const fontSizeControls = document.querySelectorAll('.font-size');
const book = document.getElementById('book');
const colorControls = document.querySelectorAll('.book__control_color .color');
const bgcControls = document.querySelectorAll('.book__control_background .color');


fontSizeControls.forEach(control => {
    control.addEventListener('click', (event)=>{
        event.preventDefault();

        fontSizeControls.forEach((btn) => {
            btn.classList.remove('font-size_active');
        });

        event.target.classList.add('font-size_active');

        const size = event.target.getAttribute('data-size');

        book.classList.remove('book_fs-big', 'book_fs-small');

        // if (size === 'small') {
        //     book.classList.add('book_fs-small');
        // } else if (size === 'big') {
        //     book.classList.add('book_fs-big')
        // }

        book.classList.add(`book_fs-${size}`)
    })
})

colorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        colorControls.forEach(btn => {
            btn.classList.remove('color_active')
        })

        event.target.classList.add('color_active');

        const color = event.target.getAttribute('data-text-color');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

        // if (color === 'black') {
        //     book.classList.add('book_color-black')
        // } else if (color === 'whitesmoke') {
        //     book.classList.add('book_color-whitesmoke')
        // } else {
        //     book.classList.add('book_color-gray')
        // }

        book.classList.add(`book_color-${color}`);
    })
})

bgcControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        bgcControls.forEach((btn) => {
            btn.classList.remove('color_active')
        })

        event.target.classList.add('color_active')

        const bgcColor = event.target.getAttribute('data-bg-color')

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white')

        // if (bgcColor === 'gray') {
        //     book.classList.add('book_bg-gray')
        // } else if (bgcColor === 'black') {
        //     book.classList.add('book_bg-black')
        // } else {
        //     book.classList.add('book_bg-white')
        // }

        book.classList.add(`book_bg-${bgcColor}`)
    })
})


// Оптимизированная версия 

// const bookElement = document.getElementById("book");
// const controlElements = document.querySelector(".book__controls");

// const updateClassList = (baseClass, modifier) => {
//   const previousClass = Array.from(bookElement.classList).find((className) => className.startsWith(baseClass));
//   if (previousClass) {
//     bookElement.classList.remove(previousClass);
//   }
//   if (modifier) {
//     bookElement.classList.add(`${baseClass}${modifier}`);
//   }
// };

// const onClickHandler = (event) => {
//   const target = event.target;
//   const { size, textColor, bgColor } = target.dataset;

//   if (size || textColor || bgColor) {
//     event.preventDefault();

//     const controlGroup = target.closest(".book__control").querySelectorAll("a");
//     controlGroup.forEach((element) =>
//       element.classList.remove(`${target.classList[0]}_active`)
//     );
//     target.classList.add(`${target.classList[0]}_active`);

//     updateClassList("book_fs-", size);
//     updateClassList("book_color-", textColor);
//     updateClassList("book_bg-", bgColor);
//   }
// };

// controlElements.addEventListener("click", onClickHandler);
