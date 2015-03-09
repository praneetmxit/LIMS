$("#urlform").submit(function(event) {


    $.mobile.loading('show');

    event.preventDefault();

    loginurl("prasad", "password", "00:1C:B3:09:85:15", "Ekse");

    $.mobile.loading('hide');


});

var productServiceUrl = "http://27.251.124.82/CaliberLIMS/Service1.asmx?op=UserLoginSts";
function loginurl(UserName, pswd, MacAddre, otherInfo)
{
    var soapMessage =
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
            +'<soap:Body>' +
            '<UserLoginSts xmlns="http://Caliberindia.com/webservices/">' +
            '<UserName>' + UserName + '</UserName>' +
            '<pswd>' + pswd + '</pswd>' +
            '<MacAddr>' + MacAddre + '</MacAddr>' +
            '<OtherInfo>' + otherInfo + '</OtherInfo>' +
            '</UserLoginSts>' +
            '</soap:Body>' +
            '</soap:Envelope>';

    $.ajax({
        url: productServiceUrl,
        type: "POST",
        dataType: "xml",
        data: soapMessage,
        complete: endSaveProduct,

        contentType: "text/xml; charset=\"utf-8\"",
        error: function(msg) {
           
            alert("error : " + msg.statusText);
        }
    });

    return false;
}

function endSaveProduct(xmlHttpRequest, status)
{
    console.log(xmlHttpRequest.responseXML);
}
