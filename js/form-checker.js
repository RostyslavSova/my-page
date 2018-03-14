function formChecker(userName,userEmail,userMsg) {
    const nameCheck = new RegExp(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/, 'g');
    const emailCheck = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'g'); 
    
    if(!nameCheck.test(userName) ) {
      return 'wrong name';
    }
    
    if(!emailCheck.test(userEmail)) {
      return 'wrong email';
    }
    
    if(userMsg.length == 0 || userMsg.length>300) {
      return 'wrong message';
    }
    
    return 'success';
}