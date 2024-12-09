function sliding() {
  const slider1 = document.querySelector('.slider1');
  const slides1 = slider1.querySelectorAll('li');
  
  // Store the total number of images
  const slideCount1 = slides1.length;
  let activeSlide1 = 0;
  
  // To change the images dynamically every 
  // 1 Secs, use SetInterval() method
  setInterval(() => {
    slides1[activeSlide1].classList.remove('active');
    activeSlide1++;
    if (activeSlide1 === slideCount1) {
      activeSlide1 = 0;
    }
    slides1[activeSlide1].classList.add('active');
  }, 1000);
  
  const slider2 = document.querySelector('.slider2');
  const slides2 = slider2.querySelectorAll('li');
  
  // Store the total number of images
  const slideCount2 = slides2.length;
  let activeSlide2 = 0;
  
  // To change the images dynamically every 
  // 1 Secs, use SetInterval() method
  setInterval(() => {
    slides2[activeSlide2].classList.remove('active');
    activeSlide2++;
    if (activeSlide2 === slideCount2) {
      activeSlide2 = 0;
    }
    slides2[activeSlide2].classList.add('active');
  }, 1000);
}

$(function () {
  
  $( "input[name='startAt']" )
  .datepicker({
      dateFormat: "yy/mm/dd", 
      minDate: new Date(2020, 0, 4),
      maxDate: new Date(2020, 0, 6)
  });  
  $('.timeSelect').clockpicker({
    autoclose: true,
  });
  $('#search').click(function () {
    $('.timeOrder').css('display', 'none');

    const startAt = `${$('input[name="startAt"').val()}`; 
    const dateList = startAt.split('/');
    const year = dateList[0];
    const month = dateList[1];
    const day = dateList[2];
    const timeType = $("input[name='timeType']:checked").val();    
    const time = `${$('input[name="time"').val()}`;
    var timeList = time.split(':');
    var hour = timeList[0];
    var minute = timeList[1];
    
    var dataLen = 0; //資料長度
    if(minute != '00') {
      dataLen = Number(hour) + 1;
    }
    else {dataLen = Number(hour);} 
    if (dataLen > 23) { dataLen = 23; } 
    
    var content = "";
    var str1 = ""; //建立一個空字串，要將資料填入的
    var str2 = ""; //建立一個空字串，要將資料填入的
    var pmEl = $("#pm");
    var metEl = $("#met");

    // init innerHTML TAG
    pmEl.html(str1);
    metEl.html(str2);

    if(timeType == 'hour') { // timeType: hour
      for (var i = 0; i < dataLen; i++) {
        content = "<li><img src='./images/PM2.5/" + year + "_M" + String(month).padStart(2, '0') + "_D" + String(day).padStart(2, '0') + "_" + String(i).padStart(2, '0') + "00(UTC+0800)_L00_TPM2.5_1HR_CONC.JPG'/></li>"; //組字串
        str1 += content; // 透過加總把 變數 content 的內容回傳到 str 中
      }
      for (var i = 0; i < dataLen; i++) {
        content = "<li><img src='./images/MET/" + year + "_M" + String(month).padStart(2, '0') + "_D" + String(day).padStart(2, '0') + "_" + String(i).padStart(2, '0') + "00(UTC+0800)_L01_1HR_Wind.JPG'/></li>"; //組字串
        str2 += content; // 透過加總把 變數 content 的內容回傳到 str 中
      }
      pmEl.html(str1);
      metEl.html(str2);
    }
    else { // timeType: day
      pmEl.html("<li><img src='./images/PM2.5/" + year + "_M" + String(month).padStart(2, '0') + "_D" + String(day).padStart(2, '0') + "_0000(UTC+0800)_L00_TPM2.5_24HR_CONC.JPG'/></li>");
      metEl.html("<li>&nbsp;</li>");
    }

    sliding();
  });
});