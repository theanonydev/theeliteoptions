<template>
  <section class="bg-primaryDark2">
    <dialog-model
      :message="alert.message"
      :showAlert="alert.message"
      :type="alert.type"
    ></dialog-model>
    <home-header></home-header>
    <div class="bg-primaryDark2 h-full">
      <article
        class="bg-primaryDark text-gray-300 flex flex-col gap-4 m-3 rounded-md p-6 text-justify border border-borderColor"
      >
        <h1 class="font-semibold text-2xl">KYC Verification</h1>
        <p>
          Verify your account by providing us with a vaild document (ID card),
          Drivers Licence, Valid Work ID Card, Passport, etc are accepted.
          Please do not try to upload a fake document as our support team
          reviews every document uploaded.
        </p>
        <p>
          Detected fake documents will lead to immediate suspension of account!
          Once Uploaded, Our support team reviews your document and gets back to
          you within 24 Hours. The uploaded documents are for verification
          purposes only and are deleted once confirmed.
        </p>
        <p>
          You will be notified via email once your document has been verified.
          Choose your document and click on the verify button.
        </p>

        <div>
          <div class="max-w-md mx-auto p-4 rounded-lg shadow-md text-sm">
            <!-- Document Type Selector -->
            <label class="block font-semibold mb-2">Select Document Type</label>
            <select
              v-model="selectedDocument"
              class="w-full p-2 border border-gray-600 bg-primaryDark2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled value="">-- Choose Document --</option>
              <option value="id_card">Identity Card</option>
              <option value="passport">International Passport</option>
              <option value="driver_license">Driver’s License</option>
              <option value="other">Other</option>
            </select>

            <!-- Upload Front Side -->
            <div class="mt-4">
              <label class="block font-semibold mb-1">Upload Front Side</label>
              <input
                type="file"
                accept="image/*"
                @change="handleFileChange($event, 'front')"
                class="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
              />
              <div v-if="preview.front" class="mt-2">
                <img :src="preview.front" class="w-full rounded-md" />
              </div>
            </div>

            <!-- Upload Back Side -->
            <div class="mt-4">
              <label class="block font-semibold mb-1">Upload Back Side</label>
              <input
                type="file"
                accept="image/*"
                @change="handleFileChange($event, 'back')"
                class="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
              />
              <div v-if="preview.back" class="mt-2">
                <img :src="preview.back" class="w-full rounded-md" />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              class="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              @click="submitKYC"
            >
              VERIFY
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import HomeHeader from "../HomeHeader.vue";
export default {
  components: {
    HomeHeader,
  },
  data() {
    return {
      alert: {
        type: "",
        message: "",
      },
      selectedDocument: "",
      files: {
        front: null,
        back: null,
      },
      preview: {
        front: null,
        back: null,
      },
      loading: false,
    };
  },
  methods: {
    showAlert(type, message) {
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.message = "";
      }, 2000);
    },
    handleFileChange(event, side) {
      const file = event.target.files[0];
      if (file) {
        this.files[side] = file;
        this.preview[side] = URL.createObjectURL(file);
      }
    },

    async uploadToCloudinary(file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Upload"); // replace here

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/daffpzpcl/image/upload", // replace here
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        return data.secure_url;
      } else {
        throw new Error(data.error?.message || "Upload failed");
      }
    },

    async submitKYC() {
      if (!this.selectedDocument || !this.files.front || !this.files.back) {
        this.showAlert(
          "error",
          "Please fill all fields and upload both images."
        );

        return;
      }

      this.loading = true;

      try {
        const frontUrl = await this.uploadToCloudinary(this.files.front);
        const backUrl = await this.uploadToCloudinary(this.files.back);

        // You can save these URLs & the document type to Firebase Firestore or Realtime DB here

        console.log("Front Image URL:", frontUrl);
        console.log("Back Image URL:", backUrl);
        console.log("Document Type:", this.selectedDocument);
        this.showAlert("success", "KYC submitted successfully!");

        // reset form
        this.selectedDocument = "";
        this.files.front = null;
        this.files.back = null;
        this.preview.front = null;
        this.preview.back = null;

        this.$router.replace("/app");
      } catch (error) {
        alert("Upload failed: " + error.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
