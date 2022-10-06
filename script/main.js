// 292
const badgeEl=document.querySelector('.badges');

window.addEventListener('scroll', function(){
    console.log(window.scrollY);//스크롤값 확인하기
    if(760<window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl, 0.6, {
            opacity:0,
            display:'none'
        })
    }else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl, 0.6,{
            opacity:1,
            display:'block'
        })
    }
});

// gsap.to(요소,시간,속성)

const fadeEl=document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl,index){
    gsap.to(fadeEl, 1, {
        delay:(index+1)*0.7,//0.7초씩 느리게 하겠다.
        opacity:1
    })
})

// 커피프로모션 토글아이콘 클릭시 박스 숨기고/나타내기
const promotionEl=document.querySelector('section.promotion')
const togglebtnEl=document.querySelector('.toggle_btn')

// 토글버튼을 클릭하면 프로모션의 크기가 변한다.
togglebtnEl.addEventListener('click', function(){

    if(promotionEl.classList.contains('hide')){ //만약 promotion클래스에 hide서식이 있다면
        // 높이 663
        promotionEl.classList.remove('hide')
    }else{ //그렇지 않으면
        // 높이 0
        promotionEl.classList.add('hide');
    }
})