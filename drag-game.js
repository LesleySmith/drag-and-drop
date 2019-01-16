let dragged;

function onDragOver(event) {
    event.preventDefault();
}

function onDragLeave(event) {
    event.target.style.background = '';
}

function onDragEnter(event) {
    const target = event.target;

    if(target && dragged) {
        const catType = dragged.alt;

        event.preventDefault();
        // Set the dropEffect to move
        event.dataTransfer.dropEffect = 'move'
        target.style.background = '#8010F7';
    }
}

function onDrop(event) {
    const target = event.target;
    const catType = dragged.alt;

    if(target && dragged) {
        target.style.backgroundColor = '';

        if(target === dropZone && catType === 'Pusheen') {
            event.preventDefault();

            // Get the id of the target and add the moved element to the target's dom
            dragged.parentNode.removeChild(dragged);
            dragged.style.opacity = '';
            target.appendChild(dragged);
            messageDisplay.textContent = 'Correct!';
        }
        else if(target === dropZone2 && catType === 'GrumpyCat') {
            event.preventDefault();

            // Get the id of the target and add the moved element to the target's dom
            dragged.parentNode.removeChild(dragged);
            dragged.style.opacity = '';
            target.appendChild(dragged);
            messageDisplay.textContent = 'Correct!';
        }
        else if(target === dropZone3 && catType === 'Maru') {
            event.preventDefault();

            // Get the id of the target and add the moved element to the target's dom
            dragged.parentNode.removeChild(dragged);
            dragged.style.opacity = '';
            target.appendChild(dragged);
            messageDisplay.textContent = 'Correct!';
        }
        else {
            target.style.backgroundColor = '#d51c00';
            messageDisplay.textContent = 'Try Again!';
        }
    }
}

function onDragStart(event) {
    let target = event.target;

    if(target && target.nodeName === 'IMG') {
        dragged = target;
        event.dataTransfer.setData('text', target.id);
        event.dataTransfer.dropEffect = 'move';
        // Make it transparent
        event.target.style.opacity = .3;
    }
}

function onDragEnd(event) {
    if(event.target && event.target.nodeName === 'IMG') {
        // Reset the tranparency
        event.target.style.opacity = '';
        dragged = null;
    }
}

function refreshPage() {
    window.location.reload();
}


const cats = document.querySelector('.cats');
const dropZone = document.querySelector('.drop-zone');
const dropZone2 = document.querySelector('.drop-zone2');
const dropZone3 = document.querySelector('.drop-zone3');
const messageDisplay = document.querySelector('#message');

// Adding Event listeners
cats.addEventListener('dragstart', onDragStart);
cats.addEventListener('dragend', onDragEnd);

// Drop zone 1
dropZone.addEventListener('drop', onDrop);
dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragleave', onDragLeave);
dropZone.addEventListener('dragover', onDragOver);

// Drop Zone 2

dropZone2.addEventListener('drop', onDrop);
dropZone2.addEventListener('dragenter', onDragEnter);
dropZone2.addEventListener('dragleave', onDragLeave);
dropZone2.addEventListener('dragover', onDragOver);

// Drop Zone 3

dropZone3.addEventListener('drop', onDrop);
dropZone3.addEventListener('dragenter', onDragEnter);
dropZone3.addEventListener('dragleave', onDragLeave);
dropZone3.addEventListener('dragover', onDragOver);



// event.preventDefault();

//     // Get the id of the target and add the moved element to the target's dom
//     dragged.parentNode.removeChild(dragged);
//     dragged.style.opacity = '';
//     target.appendChild(dragged);