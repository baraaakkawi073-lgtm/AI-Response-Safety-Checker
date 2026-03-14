// 1. First, let's define what a "Bad Response" looks like
interface SafetyReport {
    isSafe: boolean;
    foundIssues: string[];
    wordCount: number;
}

/**
 * Project: AI Response Safety Checker
 * Logic: This script scans AI outputs for "Red Flags" before showing them to users.
 */
function checkAiOutput(text: string): SafetyReport {
    const issues: string[] = [];
    
    // Logic A: Check if the AI actually gave an answer (not just empty space)
    const cleanText = text.trim();
    if (cleanText.length === 0) {
        issues.push("Empty Response: AI failed to generate content.");
    }

    // Logic B: Security Scan - Searching for sensitive words (Hardcoded leaks)
    const sensitiveWords = ["password", "secret_key", "internal_db"];
    sensitiveWords.forEach(word => {
        if (cleanText.toLowerCase().includes(word)) {
            issues.push(`Security Alert: Sensitive word '${word}' detected.`);
        }
    });

    // Logic C: Length Check - If it's too short, it might be a "Hallucination" or error
    if (cleanText.length > 0 && cleanText.length < 10) {
        issues.push("Quality Warning: Response is suspiciously short.");
    }

    // Final Report Generation
    return {
        isSafe: issues.length === 0,
        foundIssues: issues,
        wordCount: cleanText.split(" ").length
    };
}

// --- Let's test our logic with a "Bad" example ---
const mockAiResponse = "Your admin password is: 12345";
const myReport = checkAiOutput(mockAiResponse);

console.log("--- Safety Audit Results ---");
console.log("Safe to Publish?", myReport.isSafe);
console.log("Issues Found:", myReport.foundIssues);
console.log("Total Words:", myReport.wordCount);
