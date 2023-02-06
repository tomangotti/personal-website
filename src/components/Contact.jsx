import React, {useEffect} from "react";


function Contact(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js"
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '23959916',
                    formId: 'fb54ee74-5c33-42fc-bea4-2c8342130742',
                    target: '#hubspotForm'
                })
            }
        });
    })


    return (
        <>
        <h1>Contact</h1>
        <div id="hubspotForm">
        {/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
            <script>
            {hbspt.forms.create({
                region: "na1",
                portalId: "23959916",
                formId: "fb54ee74-5c33-42fc-bea4-2c8342130742"
                })}
            </script> */}
    </div>
            
            
        </>
    )
}

export default Contact