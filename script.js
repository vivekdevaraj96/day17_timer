const btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    btn.style="visibility: hidden"
    setTimeout(()=>{
        value=document.querySelector('.show')
        value.innerText="10"
        setTimeout(()=>{
            value.innerText="9"
            setTimeout(()=>{
                value.innerText="8"
                setTimeout(()=>{
                    value.innerText="7"
                    setTimeout(()=>{
                        value.innerText="6"
                        setTimeout(()=>{
                            value.innerText="5"
                            setTimeout(()=>{
                                value.innerText="4"
                                setTimeout(()=>{
                                    value.innerText="3"
                                    setTimeout(()=>{
                                        value.innerText="2"
                                        setTimeout(()=>{
                                            value.innerText="1"
                                            setTimeout(()=>{
                                                value.innerText="Happy Independence Day"
                                                setTimeout(()=>{
                                                    value.style="Display:none"
                                                    btn.style="visibility: visible"
                                                },5000)
                                                        
                                                
                                            },1000)    
                                            
                                        },1000)    
                                        
                                    },1000)      
                                    
                                },1000)      
                                
                            },1000)      
                            
                        },1000)     
                        
                    },1000)       
                    
                },1000)     
                
            },1000)       
            
        },1000)
        
    },1000)
})