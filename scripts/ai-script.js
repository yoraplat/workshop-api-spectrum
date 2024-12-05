const spinner = $(".loading-state");
const generatedImageEl = $("#generated-image");

$(document).ready(function () {
  $("#generate").click(function () {
    const prompt = $("#prompt").val();
    if (!prompt) {
      alert("Geef een beschrijving van de afbeelding");
      return;
    }

    const generationType = $("input[name='generationType']:checked").val();
    const API_URL_FAST =
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4";
    const API_URL_SLOW =
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";
    const ACCESS_TOKEN = "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";

    $.ajax({
      url: generationType !== "fast" ? API_URL_SLOW : API_URL_FAST,
      type: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      contentType: "application/json",
      data: JSON.stringify({
        inputs: prompt,
      }),
      beforeSend: function () {
        spinner.show();
        generatedImageEl.hide();
      },
      success: function (response, status, xhr) {
        const reader = new FileReader();
        reader.onload = function (event) {
          $("#generated-image").attr("src", event.target.result).show();
        };
        spinner.hide();
        reader.readAsDataURL(response);
      },
      error: function (xhr, status, error) {
        spinner.hide();
        console.error("Error generating image:", error);
        alert(
          "Failed to generate the image. Please check the console for details."
        );
      },
      xhrFields: {
        responseType: "blob",
      },
    });
  });
});
