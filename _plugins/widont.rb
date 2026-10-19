# A widont plugin for Jekyll
#
# INSTALLATION
# 1. Create a _plugins directory in your Jekyll site
# 2. Put this file in that folder
#
# USAGE
# <h1>{{ page.title | widont }}</h1>
#
# FEEDBACK AND BUGS
# Please report bugs or other feedback at http://scottboms.com/

require 'liquid'

module WidontFilter

  # Return the element's text after applying the filter
  # Joins the last two words of each line (and so each paragraph after
  # newline_to_br) with a non-breaking space
  def widont(text)
    text.to_s.strip.gsub(/([^\s<>]+)[ \t]+([^\s<>]+)((?:<br\s*\/?>)?)[ \t]*$/) { "#{$1}&nbsp;#{$2}#{$3}" }
  end
    
end

Liquid::Template.register_filter(WidontFilter)