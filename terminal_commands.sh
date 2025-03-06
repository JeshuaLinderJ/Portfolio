# Find large files in your repository
find . -type f -size +50M

# If you find large files, you may need to use Git LFS or remove them
git rm --cached [large-file-path]








git config http.lowSpeedTime 300git config http.lowSpeedLimit 1000# If using HTTPS, try increasing the timeoutgit config http.postBuffer 524288000# Increase the POST buffer size






# Then try your operation again to be prompted for credentialsgit credential reject# Update credentials if neededgit remote -v# Verify remote URL# Push with verbose output for more information
git push -v

# Try pushing in smaller commits
# Or if possible, try SSH instead of HTTPS
