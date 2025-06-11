module.exports = async function (context, req, inputBlob) {
    context.log("JavaScript HTTP trigger function processed a request.");

    // Read from the input blob
    const inputContent = inputBlob.toString(); // Convert buffer to string
    context.log("Input Blob Content:", inputContent);

    // Write to the output blob
    const outputContent = `Processed: ${inputContent}`;
    context.bindings.outputBlob = outputContent; // Write output

    // Send response back
    context.res = {
        status: 200,
        body: "Blob processed successfully!"
    };
};
