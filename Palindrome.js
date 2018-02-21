Palindrome.

static boolean palindrome(String s){
    String revS = "";
    String checkS = s.toLowerCase();
    String[] checkSArr = checkS.split("");

    for(String e : checkSArr){
        revS = e + revS;
    }

    return (checkS.equals(revS)) ? true : false;
}
