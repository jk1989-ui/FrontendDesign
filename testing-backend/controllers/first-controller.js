const addingTwoNumbers = (req, res) => {
    try {
        console.log(req.body)
        const { num1, num2 } = req.body;
        const result = num1+num2;
        res.json({
            message:"Addition of two numbers",
            result:result,
            data:true
        })
    } catch (error) {
        res.json({
            message:error.message,
            result:null,
            data:false
        })
    }
}

const subtractingTwoNumbers = (req, res) => {
    try {
        console.log(req.body)
        const { num1, num2 } = req.body;
        const result = num1-num2;
        res.json({
            message:"subtraction of two numbers",
            result:result,
            data:true
        })
    } catch (error) {
        res.json({
            message:error.message,
            result:null,
            data:false
        })
    }
}

module.exports = {
    addingTwoNumbers,
    subtractingTwoNumbers
}