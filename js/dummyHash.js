// A simple, INSECURE dummy hash for demonstration purposes only.
// Do NOT use this for real passwords!
function dummyHash(key, word) {
    if (!key || !word) return "";
    
    // Combine the key and website name
    let combined = key + "-" + word;
    
    // Reverse the string
    let reversed = combined.split('').reverse().join('');
    
    // Convert to Base64 to make it look like a generated hash
    let fakeHash = btoa(reversed);
    
    // Ensure it meets standard password rules (start with capital, add a number/special)
    let final = "D!" + fakeHash;
    
    // Trim to 14 characters
    if (final.length > 14) {
        final = final.substring(0, 14);
    }
    
    return final;
}