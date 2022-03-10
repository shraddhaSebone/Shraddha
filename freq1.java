package hello;
import java.util.*;
public class freq1 {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a String");
		String str=sc.nextLine();
		System.out.println("Enter a word ");
		String word=sc.nextLine();
	
		    String a[] = str.split(" ");
		    int count = 0;
		    for (int i = 0; i < a.length; i++)
		    {
		    if (word.equals(a[i]))
		        count++;
	    }
		    System.out.println(count);
 	}
}