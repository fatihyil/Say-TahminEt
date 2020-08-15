$('document').ready(function () {
    var hak = 0;
    var sayi = Math.floor(Math.random() * 10) + 1;
    var puan = 100;
    $("#puanNum").text(puan);
    //Tahmin edilecek sayıyı gösteriyor
    $("#btnShowNum").click(function () {
        $("#numbertah").text(sayi);
        $("#ShowMessage").removeClass("d-none");
    });

    //Oyunu tekrar başlatıyor
    $("#btnAgain").click(function () {
        location.reload();
    });

    //Kendi deneme sayısını giriyor
    $("#btnHakNum").click(function () {
        deger = $("#hakNum").val();
        if (deger <= 5 && deger > 0) {
            $("#hakHata").removeClass("text-danger");
            hak = deger;
            $("#kalanHak").text(hak);
            $("#btnHakNum").addClass("disabled");
        }
        else {
            $("#hakHata").addClass("text-danger");
        }
    });

    $("#btnGuestNumber").click(function () {
        var number = $("#guestNum").val();
        if(hak == 0){
            var dangermessage = "Kendi hak numaranızı girmeden sayı tahmininde bulunamazsınız !"
            $("#dangerMessage").text(dangermessage);
            $('#modaldangerMessage').modal('show');
        }
        else{
            if (sayi == number) {
                $("#puan").text(puan);
                $('#modalMessage').modal('show');
                $("#numbertah").text(number);
                
            }
            else {
                hak--;
                if (hak == 0) {
                    debugger
                    $("#numbertah").text(sayi);
                    $("#kalanHak").text(hak);
                    puan = 0;
                    $("#puanNum").text(puan);
                }            
                else {
                    puan = puan - 20;
                    $("#puanNum").text(puan);
                    $("#kalanHak").text(hak);
                    var  message = "Sayıyı bilemediniz Tekrar deneyiniz !"
                    $("#dangerMessage").text(message);
                    $('#modaldangerMessage').modal('show');
                }
            }
        }
        
    })
    $("#newGame").click(function(){
        location.reload();
    })




});