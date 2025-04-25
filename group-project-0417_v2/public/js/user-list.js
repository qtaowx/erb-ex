document.addEventListener('DOMContentLoaded', async () => {
    const userListDiv = document.getElementById('user-list');
    try {
      const response = await fetch('/api/users'); // 注意這裡要打 /api/users
      const users = await response.json();
  
      userListDiv.innerHTML = ''; // 清空列表
  
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.style.border = '1px solid #ccc';
        userDiv.style.marginBottom = '10px';
        userDiv.style.padding = '10px';
        userDiv.style.display = 'flex';
        userDiv.style.alignItems = 'center';
  
        // 圖片
        const img = document.createElement('img');
        img.src = `/api/users/avatar/${user._id}`;  // ⭐ 正確使用該用戶的 _id
        img.alt = '頭像';
        img.width = 100;
        img.onerror = () => {
          img.src = 'default.png'; // fallback
        };
  
        const info = document.createElement('div');
        info.style.marginLeft = '20px';
        info.innerText = `用戶：${user.name}， Email： ${user.email}`;
  
        userDiv.appendChild(img);
        userDiv.appendChild(info);
  
        userListDiv.appendChild(userDiv);
      });
    } catch (error) {
      console.error('無法載入使用者列表', error);
      userListDiv.innerText = '載入失敗';
    }
  });
  