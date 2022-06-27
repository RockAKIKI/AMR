"use strict";

let currentBtn;

const faqUL = document.getElementById('faqUl');
faqUL.addEventListener('click',clickFaqUL);

const faqAnswers = faqUL.querySelectorAll('.faqAnswer');
const faqSVG = faqUL.querySelectorAll('svg');

function clickFaqUL(e)
{
    e.preventDefault();
    
    const closestButton = e.target.closest('button');
    if(closestButton === null || closestButton === undefined) return;

    for (let i = 0; i < faqAnswers.length; i++) {
        faqAnswers[i].classList.add('closed');
        
        faqSVG[i].classList.remove('svgOpened');
        faqSVG[i].classList.add('svgClosed');
    }
    
    const svg = closestButton.querySelector('svg');
    const answer = closestButton.parentNode.querySelector('.faqAnswer');

    if(currentBtn != closestButton)
    {
        if(answer.classList.contains('closed'))
        {
            svg.classList.add('svgOpened');
            answer.classList.remove('closed');
        }
        currentBtn = closestButton;
    }
    else
    {
        svg.classList.remove('svgOpened');
        svg.classList.add('svgclosed');
        answer.classList.add('closed');
        currentBtn = '';
    }
}

