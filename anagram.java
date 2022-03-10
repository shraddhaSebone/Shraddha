package hello;
import java.util.*;
public class anagram {
  public static void main(String[]args) {
		Scanner sc= new Scanner(System.in);
		System.out.println("enter string1 ");
		String str1= sc.nextLine();
		System.out.println("enter string2");
		String str2 = sc.nextLine();
		anagram r = new anagram();
		r.ana(str1, str2);
	}
		public void ana(String str1,String str2) {
			
	        char a[]=str1.toLowerCase().toCharArray();
		char b[] = str2.toLowerCase().toCharArray();
		Arrays.sort(a);
		Arrays.sort(b);
		boolean result =Arrays.equals(a,b);
		if(result==true) {
			System.out.println("Strings are anagram");
		}
		else {
			System.out.println("strings are not anagram");
		}
	}
