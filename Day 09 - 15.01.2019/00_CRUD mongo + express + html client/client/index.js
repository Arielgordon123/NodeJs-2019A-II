onload= getProducts;

       function getProducts() {

        document.getElementById("productList").innerHTML ="";

           fetch("/api/products")
               .then(res => res.json())
               .then(productList => {
                   for (let i=0; i<productList.length;i++) {
                       let product=productList[i];

                       document.getElementById("productList").innerHTML += `
                        <div class="col-sm-4">
                            <div class="thumbnail" title="${product._id}">
                            <input disabled value="${product.name}" id="${product._id}name"/>
                            <input disabled value="${product.price}" id="${product._id}price"/>
                            <button class="btn" id="${product._id}edit">Edit</button>
                            <button class="btn" id="${product._id}delete">Delete</button>
                            <button style="display:none" class="btn" id="${product._id}save">Save changes</button>
                            </div>
                        </div>`;

                   }


                   for (let i=0; i<productList.length;i++) {
                    let product=productList[i];

                     document.getElementById(product._id+"edit")
                     .addEventListener("click",()=>{editProduct(product)});

                     document.getElementById(product._id+"delete")
                     .addEventListener("click",()=>{deleteProduct(product._id)});

                     document.getElementById(product._id+"save")
                     .addEventListener("click",()=>{saveChanges(product)});
                }
               })
               .catch(err => console.log(err));
       }


       function addProduct() {
        
        let body={
            "name":document.getElementById("newname").value,
            "price":document.getElementById("newprice").value
        };
        document.getElementById("newname").value="";
        document.getElementById("newprice").value="";

        fetch("/api/products", {
            method: "POST",   
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(body), 
        })
        .then(res => getProducts())
        .catch(err => console.log(err));

       }




       function saveChanges(product) {

        document.getElementById(product._id+"name").setAttribute("disabled",true);
        document.getElementById(product._id+"price").setAttribute("disabled",true);
        document.getElementById(product._id+"save").style.display="none";
        
        let body={
            "name":document.getElementById(product._id+"name").value,
            "price":document.getElementById(product._id+"price").value
        };


        fetch("/api/products?id="+product._id, {
            method: "PUT",   
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(body), 
        })
        .then(res => getProducts())
        .catch(err => console.log(err));
       }


       function editProduct(product) {
        document.getElementById(product._id+"save").style.display="block";
        document.getElementById(product._id+"name").removeAttribute("disabled");
        document.getElementById(product._id+"price").removeAttribute("disabled");
       }


       function deleteProduct(id) {
        fetch("/api/products?id="+id, {method: "DELETE"})
        .then(res => getProducts())
        .catch(err => console.log(err));
       }