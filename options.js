document.addEventListener("DOMContentLoaded", () => {
    // Обработчик для кнопки settings
    document.querySelector(".settings").addEventListener("click", () => {
      // Получаем все элементы с классами settings-switch и settings-switch2
      const settingsSwitches = document.querySelectorAll(".settings-switch");
      const settingsSwitch2s = document.querySelectorAll(".settings-switch2");
      const comeBacks = document.querySelectorAll(".come-back");
  
      // Переключаем display для всех элементов с этими классами
      settingsSwitches.forEach(element => {
        element.style.display = "none";
      });
  
      settingsSwitch2s.forEach(element => {
        element.style.display = "none";
      });
  
      comeBacks.forEach(element => {
        element.style.display = "flex";
      });
    });
  
    // Обработчик для кнопки Arrow
    document.querySelector(".Arrow2").addEventListener("click", () => {
      const settingsSwitches = document.querySelectorAll(".settings-switch");
      const settingsSwitch2s = document.querySelectorAll(".settings-switch2");
      const comeBacks = document.querySelectorAll(".come-back");
  
      // Переключаем display обратно
      settingsSwitches.forEach(element => {
        element.style.display = "flex";
      });
  
      settingsSwitch2s.forEach(element => {
        element.style.display = "inline-block";
      });
  
      comeBacks.forEach(element => {
        element.style.display = "none";
      });
    });
  });