import { Index } from "@upstash/vector";

// WARNING: Hardcoded credentials for testing only. Do not commit.
const UPSTASH_URL = "https://growing-hawk-38722-eu1-vector.upstash.io";
const UPSTASH_TOKEN = "ABYFMGdyb3dpbmctaGF3ay0zODcyMi1ldTFhZG1pbk1UQTFZek16TXpjdFpEZzRPQzAwWTJRd0xUazVZVGt0TkRNM01UQTNaRFV3TmpNNQ==";

const index = new Index({
  url: UPSTASH_URL,
  token: UPSTASH_TOKEN,
});

async function testUpstash() {
  const testId = "test-data-id-1";
  const testData = "This is a test string to check data-based upsert and query.";
  const testQueryData = "Test query string";

  try {
    console.log(`Attempting to upsert data for ID: ${testId}...`);
    const upsertRes = await index.upsert({
      id: testId,
      data: testData,
      // metadata: { source: "test_script" }, // Optional metadata
    });
    console.log("Upsert Response:", upsertRes);

    // Wait a moment for indexing
    console.log("Waiting a few seconds for indexing...");
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second wait

    console.log(`Attempting to query using data: "${testQueryData}"...`);
    const queryRes = await index.query({
      data: testQueryData,
      topK: 3,
      includeVectors: false, // Don't need vectors for this test
      includeMetadata: true,
      includeData: true, // Request the original data back
    });
    console.log("Query Response:", JSON.stringify(queryRes, null, 2));

    // Clean up the test data
    console.log(`Attempting to delete test ID: ${testId}...`);
    const deleteRes = await index.delete(testId);
    console.log("Delete Response:", deleteRes);

  } catch (error) {
    console.error("Error during Upstash test:", error);
  }
}

testUpstash(); 