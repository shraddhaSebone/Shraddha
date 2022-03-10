package hello;
import java.util.*;
public class freq1 {
       public static void main(String[]args) {
		  
		Scanner sc= new Scanner(System.in);
		System.out.println("enter a string");
		String str = sc.nextLine();
		System.out.println("enter a word");
		String word= sc.next();
		frequency_of_occurance f = new frequency_of_occurance();
		f.freq(str, word);
	}
		public void freq(String str,String word) {
			int c =0;
		
		String[] a= str.split(" ");
	
		for(int i=0;i<a.length;i++)
		     if(a[i].equals(word))
		    	 c++;
		System.out.println(c);
	}
}
