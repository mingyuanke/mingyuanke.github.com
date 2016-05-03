!(function() {
	//微信权限验证配置
    window.wx.config({
        debug: true,
        appId: 'wxbd45231d4e653627',//fdb519c086347af5d3b641239d704252 
        //access_token:PaaVx8T9pMP718R4htJmsMlEGA9Yvv9iJowcbSZmk907l7HEbuk47JPS8oY8qc9mkx2IgU7Mb1t211rybMz_gQuRc6EQNeGR_s3iM0e7G3O3IljejnYBVoidLhCHU5yuELUbAFANUD
        //ticket:kgt8ON7yVITDhtdwci0qeaC-i0Ht508JTTmVYTF3yF43ZkvreBAU4-m39Byf3TxGAUEuvxiMP0ejzvzyQ-R-bw
        timestamp: 1462257847,
        nonceStr: '74r2kj8oao3knac',
        signture: 'def6dcff4bd9e670aec823448df8ce90537a1bfc',
        url:"http://mingyuanke.github.io/",
        jsApiList: [
            'scanQRCode'
        ]
    })
    wx.ready(function() {
        var scanQRCodeBtn = document.querySelector("#scanQRCode");
        scanQRCodeBtn.onclick = function() {
            wx.scanQRCode({
                needResult: 1,
                desc: 'scanQRCode desc',
                success: function(res) {
                    alert(JSON.stringify(res));
                }
            });
        }
    })
})();
