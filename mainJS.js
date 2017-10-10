$(function () {

    var oneProduct = $(".maketOfProduct").html();
    var oneProductInColumn2 = $(".maketOfProductInColumn2").html();
    var listInFirstColumn = $(".products");
    var listInSecondColumn1 = $(".allProducts");
    var listInSecondColumn2 = $(".allBoughtProducts");

    function addItem(name) {
        name = name.trim();
        if (name === "") return;
        var node = $(oneProduct);
        var sum = 1;
        var sumLabel = node.find(".bl-label");
        var node2 = $(oneProductInColumn2);
        node.find(".name").text(name);
        sumLabel.text(sum);
        node2.find(".productWasBought").text(name);
        node2.find(".labelSumOfProducts").text(sum);

        node.find(".deleteButton").click(function () {
            node.remove();
            node2.remove();
        });

        node.find(".bl-plus").click(function () {
            sum = sum + 1;
            sumLabel.text(sum);
            node2.find(".labelSumOfProducts").text(sum);
        });


        node.find(".bl-minus").click(function () {
            sum = sum - 1;
            $(node.find(".bl-minus-disabled")).attr("class", "bl-minus");
            if (sum == 0) sum = 1;
            sumLabel.text(sum);
            node2.find(".labelSumOfProducts").text(sum);
        });
        
        
        node.find(".secondButton").click(function () {
            if($(this).text()=="Куплено"){
                $(this).text("Не куплено");
                node.find(".bl-plus").hide();
                node.find(".bl-minus").hide();
                node.find(".deleteButton").hide();
                node.find(".name").attr("style","text-decoration: line-through;");
                node2.find(".labelSumOfProducts").attr("style","text-decoration: line-through;");
                node2.find(".productWasBought").attr("style","text-decoration: line-through;");
            }

            else {
                $(this).text("Куплено");
                node.find(".bl-plus").show();
                node.find(".bl-minus").show();
                node.find(".deleteButton").show();
                node.find(".name").attr("style","");
                node2.find(".labelSumOfProducts").attr("style","");
                node2.find(".productWasBought").attr("style","");
            }

        });



        listInFirstColumn.append(node);
        node.hide();
        node.fadeIn(500);
        listInSecondColumn1.append(node2);
    }

    addItem("Product1");
    addItem("Product2");
    addItem("Product3");

    $(".Button").click(function () {

        addItem(($(".nameOfProduct")).val());
        ($(".nameOfProduct")).val("");
        ($(".nameOfProduct")).focus();
    });

    $(".nameOfProduct").keyup(function (e) {

        if(e.keyCode==13)$(".Button").click();
    });


    })