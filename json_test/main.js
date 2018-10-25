var xhr=new XMLHttpRequest();
xhr.open("get", "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&q", true);
xhr.send(null);

xhr.onload=function(){
    console.log(xhr);
    if(xhr.status==200){
        var json_data=JSON.parse(xhr.responseText);
        console.log(json_data.result.records[1].Zone);
        var dataLen=json_data.result.records.length;
        console.log("長度："+dataLen);

        var selectBar=document.querySelector("#selectBar");
        var selectBarOption=document.querySelector("#selectBar option");
        var place_row=document.querySelector(".place_row");
        var place_img=document.querySelector(".place_img");

        $(".btn").click(function (e) { 
            e.preventDefault();
            console.log(e);
            var str="";

            for (var i = 0; i < dataLen; i++) {
                
                if (json_data.result.records[i].Zone == e.target.innerHTML) {

                    str += '<div class="col-md-6 place_block">' +
                        '<div class="place_inblock">' +
                        '<div class="place_img" style="background-image: url(' + json_data.result.records[i].Picture1 + ');"></div>' +
                        '<div class="place_content">' +
                        '<span class="place_title">' + json_data.result.records[i].Name + '</span>' +
                        '<span class="place_zone">' + json_data.result.records[i].Zone + '</span>' +
                        '<p class="place_add">' + json_data.result.records[i].Add + '</p>' +
                        '<p class="place_opentime" > ' + json_data.result.records[i].Opentime + '</p > ' +
                        '<p class="place_detail">' + json_data.result.records[i].Description + '</p>' +
                        '</div></div></div>';

                        

                    console.log("符合" + json_data.result.records[i].Zone);
                }

            }
            place_row.innerHTML = str;
            
            
        });

        selectBar.addEventListener("change",changeList,false);
        function changeList(e){
            console.log("change!");
            console.log(e.target.value);
            var str = "";
            for(var i=0;i<dataLen;i++){
                if (json_data.result.records[i].Zone == e.target.value) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    
                    str += '<div class="col-md-6 place_block">'+
                        '<div class="place_inblock">'+
                        '<div class="place_img" style="background-image: url(' + json_data.result.records[i].Picture1+');"></div>' +
                        '<div class="place_content">'+
                        '<span class="place_title">' + json_data.result.records[i].Name+'</span>'+
                        '<span class="place_zone">' + json_data.result.records[i].Zone+'</span>'+
                        '<p class="place_add">' + json_data.result.records[i].Add+'</p>' +
                        '<p class="place_opentime" > ' + json_data.result.records[i].Opentime+'</p > ' +
                        '<p class="place_detail">' + json_data.result.records[i].Description+'</p>' +

                        '</div></div></div>';
            

                        
                    
                    console.log("符合"+json_data.result.records[i].Zone);
                }
                
            }
            place_row.innerHTML=str;
            

            
        }

    }else{
        console.log("錯誤");
    }
};