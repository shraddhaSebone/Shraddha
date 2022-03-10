package hello;
import java.util.*;
public class anagram {
   public static void main(String[] args) {
	   Scanner sc=new Scanner(System.in);
	    System.out.println("First String ");
	    String str1=sc.nextLine();
	   // str1.replaceAll("//s","");
	    System.out.println("Second String ");
	    String str2=sc.nextLine();
	    char a[] = str1.toLowerCase().toCharArray();
	    char b[] = str2.toLowerCase().toCharArray();
	    
	    Arrays.sort(a);
	    Arrays.sort(b);
	    
	    boolean result=Arrays.equals(a,b);
	     
	    if(result==true)
	    {
	    	System.out.println("Strings are anagram");
	    }
	    else
	    {
	    	System.out.println("Strings are not anagram");
	    }
   }
}
